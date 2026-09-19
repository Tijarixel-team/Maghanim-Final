'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {clsx} from '@/lib/clsx';
import {ShinyButton} from './ui/shiny-button';

type State = 'idle' | 'sending' | 'sent' | 'error';

const FIELDS = [
  {name: 'name', type: 'text', required: true, autoComplete: 'name'},
  {name: 'company', type: 'text', required: true, autoComplete: 'organization'},
  {name: 'email', type: 'email', required: true, autoComplete: 'email'},
  {name: 'phone', type: 'tel', required: false, autoComplete: 'tel'}
] as const;

export function ContactForm() {
  const t = useTranslations('contact');
  const [state, setState] = useState<State>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};

    for (const f of FIELDS) {
      const v = String(data.get(f.name) ?? '').trim();
      if (f.required && !v) next[f.name] = t('required');
      if (f.name === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        next.email = t('invalidEmail');
    }
    if (!String(data.get('message') ?? '').trim()) next.message = t('required');

    setErrors(next);
    if (Object.keys(next).length) return;

    setState('sending');
    try {
      const res = await fetch('/api/contact', {method: 'POST', body: data});
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div
        role="status"
        className="border border-gold/45 bg-paper px-8 py-14 text-center"
      >
        <p className="font-display text-[1.35rem] leading-snug text-ink">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 border border-ink/12 bg-paper p-8 sm:grid-cols-2 md:p-10">
      {/* Honeypot: a real field for a bot, invisible and unreachable for a person. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {FIELDS.map((f) => (
        <Field
          key={f.name}
          name={f.name}
          type={f.type}
          required={f.required}
          autoComplete={f.autoComplete}
          label={t(`fields.${f.name}`)}
          optional={f.required ? undefined : t('optional')}
          error={errors[f.name]}
        />
      ))}

      <Field
        name="message"
        as="textarea"
        required
        label={t('fields.message')}
        error={errors.message}
        className="sm:col-span-2"
      />

      <div className="flex flex-col items-center sm:col-span-2">
        <ShinyButton
          type="submit"
          size="sm"
          className="shiny-cta--on-light"
          disabled={state === 'sending'}
        >
          {state === 'sending' ? t('sending') : t('submit')}
        </ShinyButton>
        {state === 'error' && (
          <p role="alert" className="mt-4 text-[0.9rem] text-[#A8321E]">
            {t('error')}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  error,
  optional,
  as = 'input',
  className,
  type = 'text',
  required,
  autoComplete
}: {
  name: string;
  label: string;
  error?: string;
  optional?: string;
  as?: 'input' | 'textarea';
  className?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const control = clsx(
    'mt-2.5 w-full border bg-paper px-4 py-3.5 text-[1rem] text-ink outline-none transition-colors',
    'placeholder:text-ink/35 focus:border-gold',
    error ? 'border-[#A8321E]' : 'border-ink/18 hover:border-ink/35'
  );

  const shared = {
    id: name,
    name,
    required,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${name}-error` : undefined,
    className: control
  };

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-[0.9rem] font-medium text-ink/80"
      >
        {label}
        {optional && (
          <span className="ms-2 font-normal text-ink/70">
            ({optional})
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea {...shared} rows={5} />
      ) : (
        <input {...shared} type={type} />
      )}

      {error && (
        <p id={`${name}-error`} className="mt-2 text-[0.82rem] text-[#A8321E]">
          {error}
        </p>
      )}
    </div>
  );
}
