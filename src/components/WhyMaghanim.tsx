'use client';

import {useTranslations} from 'next-intl';
import {Pattern} from './Pattern';
import {Reveal} from './Reveal';
import {X, Check} from 'lucide-react';

export function WhyMaghanim() {
  const t = useTranslations('why');
  const withoutPoints = t.raw('without.points') as string[];
  const withPoints = t.raw('with.points') as string[];

  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 scroll-mt-[84px] md:py-32">
      <Pattern tint="var(--color-gold)" opacity={0.06} size={420} fade="both" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-[62ch] text-center">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-gold">
              {t('label')}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.16] tracking-[-0.012em] text-ink text-balance">
              {t('title')}
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.75] text-body text-pretty">
              {t('body')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* ── WITHOUT card ─────────────────────────────────────────── */}
            <div className="rounded-2xl border border-ink/8 bg-paper p-8 md:p-10">
              <span className="inline-block rounded-full border border-ink/12 bg-cream px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                {t('without.badge')}
              </span>
              <h3 className="mt-6 max-w-[22ch] font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.25] text-ink">
                {t('without.heading')}
              </h3>
              <ul className="mt-7 space-y-4">
                {withoutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C4553D]/12">
                      <X className="h-3 w-3 text-[#C4553D]" strokeWidth={3} />
                    </span>
                    <span className="text-[0.95rem] leading-[1.6] text-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── WITH card ────────────────────────────────────────────── */}
            <div className="relative isolate overflow-hidden rounded-2xl bg-emerald-base p-8 text-on-dark md:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_60%,var(--color-emerald-deep)_100%)]"
              />
              <Pattern tint="var(--color-gold)" opacity={0.08} size={360} fade="both" />

              <div className="relative">
                <span className="inline-block rounded-full border border-on-dark/20 bg-on-dark/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {t('with.badge')}
                </span>
                <h3 className="mt-6 max-w-[22ch] font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.25] text-cream">
                  {t('with.heading')}
                </h3>
                <ul className="mt-7 space-y-4">
                  {withPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                        <Check className="h-3 w-3 text-gold-light" strokeWidth={3} />
                      </span>
                      <span className="text-[0.95rem] leading-[1.6] text-on-dark/85">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-[72ch] text-center text-[0.875rem] leading-[1.65] text-body/60">
            {t('disclaimer')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
