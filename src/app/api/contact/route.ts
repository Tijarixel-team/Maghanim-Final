import {NextResponse} from 'next/server';

/**
 * The single conversion point. Validation runs here as well as in the client,
 * and nothing is trusted from the browser.
 *
 * Delivery is intentionally unwired: the destination is an open decision
 * (PRODUCT.md). Set CONTACT_WEBHOOK_URL, or drop a provider call in below.
 */
export async function POST(request: Request) {
  const form = await request.formData();

  // Honeypot — a bot fills it, a person never sees it.
  if (String(form.get('website') ?? '').trim()) {
    return NextResponse.json({ok: true});
  }

  const payload = {
    name: String(form.get('name') ?? '').trim(),
    company: String(form.get('company') ?? '').trim(),
    email: String(form.get('email') ?? '').trim(),
    phone: String(form.get('phone') ?? '').trim(),
    message: String(form.get('message') ?? '').trim()
  };

  const invalid =
    !payload.name ||
    !payload.company ||
    !payload.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email);

  if (invalid) {
    return NextResponse.json({ok: false, error: 'invalid'}, {status: 422});
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    // The single conversion point never claims a lead was captured when it was
    // not. Without a destination this fails loudly rather than swallowing it.
    console.error('[contact] CONTACT_WEBHOOK_URL is not set; refusing to report success.');
    return NextResponse.json({ok: false, error: 'unconfigured'}, {status: 503});
  }

  const res = await fetch(webhook, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    return NextResponse.json({ok: false, error: 'delivery'}, {status: 502});
  }

  return NextResponse.json({ok: true, delivered: true});
}
