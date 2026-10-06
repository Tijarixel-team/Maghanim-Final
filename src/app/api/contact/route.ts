import {NextResponse} from 'next/server';

const RESEND_API_URL = 'https://api.resend.com/emails';
const MAX_REQUEST_BYTES = 64_000;

const LIMITS = {
  name: 100,
  company: 160,
  email: 254,
  phone: 50,
  message: 5_000
} as const;

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * The site's single conversion point. The browser is never trusted: fields
 * are validated again here, the bot trap is checked, and delivery only
 * succeeds after Resend accepts the message.
 */
export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ok: false, error: 'too_large'}, {status: 413});
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ok: false, error: 'invalid'}, {status: 400});
  }

  // Honeypot: a bot fills it, a person never sees it.
  if (readField(form, 'website')) {
    return NextResponse.json({ok: true});
  }

  const payload: ContactPayload = {
    name: readField(form, 'name'),
    company: readField(form, 'company'),
    email: readField(form, 'email'),
    phone: readField(form, 'phone'),
    message: readField(form, 'message')
  };

  if (!isValid(payload)) {
    return NextResponse.json({ok: false, error: 'invalid'}, {status: 422});
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('[contact] Resend environment variables are not configured.');
    return NextResponse.json({ok: false, error: 'unconfigured'}, {status: 503});
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: 'New Maghanim website enquiry',
        text: formatEmail(payload)
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000)
    });

    if (!response.ok) {
      console.error('[contact] Resend rejected delivery.', {status: response.status});
      return NextResponse.json({ok: false, error: 'delivery'}, {status: 502});
    }
  } catch (error) {
    console.error('[contact] Resend delivery failed.', {
      cause: error instanceof Error ? error.message : 'unknown'
    });
    return NextResponse.json({ok: false, error: 'delivery'}, {status: 502});
  }

  return NextResponse.json({ok: true, delivered: true});
}

function readField(form: FormData, name: string) {
  const value = form.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function isValid(payload: ContactPayload) {
  return (
    payload.name.length > 0 &&
    payload.name.length <= LIMITS.name &&
    payload.company.length > 0 &&
    payload.company.length <= LIMITS.company &&
    payload.email.length <= LIMITS.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email) &&
    payload.phone.length <= LIMITS.phone &&
    payload.message.length > 0 &&
    payload.message.length <= LIMITS.message
  );
}

function formatEmail(payload: ContactPayload) {
  return [
    'A new enquiry was submitted through the Maghanim website.',
    '',
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Work email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    '',
    'Message:',
    payload.message
  ].join('\n');
}
