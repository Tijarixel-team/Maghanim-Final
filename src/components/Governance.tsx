import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Pattern} from './Pattern';
import {Mark} from './Mark';
import {Reveal} from './Reveal';

const COLUMNS = ['corporate', 'compliance', 'operating'] as const;

export function Governance() {
  const t = useTranslations('governance');

  return (
    <section
      id="governance"
      className="relative isolate overflow-hidden bg-emerald-base py-24 text-on-dark scroll-mt-[84px] md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_74%_80%_at_50%_36%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_56%,var(--color-emerald-deep)_100%)]"
      />
      <Pattern tint="var(--color-gold)" opacity={0.08} size={560} fade="both" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="max-w-[62ch]">
            <Mark variant="gold" className="h-12 w-auto opacity-90" />
            <h2 className="mt-9 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.16] tracking-[-0.012em] text-cream text-balance">
              {t('title')}
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.78] text-on-dark/72 text-pretty">
              {t('body')}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-3">
          {COLUMNS.map((col, i) => (
            <Reveal key={col} delay={0.08 * i}>
              <h3 className="border-t border-on-dark/25 pt-5 font-display text-[1.22rem] text-cream">
                {t(`columns.${col}.title`)}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {(t.raw(`columns.${col}.items`) as string[]).map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3.5 text-[0.95rem] leading-[1.66] text-on-dark/76"
                  >
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 border-t border-on-dark/15 pt-9 md:flex md:items-end md:justify-between md:gap-12">
            <div className="max-w-[68ch]">
              <p className="text-[0.92rem] text-on-dark/55">{t('engagementLabel')}</p>
              <p className="mt-3 text-[1rem] leading-[1.75] text-on-dark/80">{t('engagement')}</p>
            </div>
            <Link
              href="/governance"
              className="mt-7 inline-block shrink-0 border-b border-gold/50 pb-1 text-[0.9rem] text-gold transition-colors hover:border-gold-light hover:text-gold-light md:mt-0"
            >
              {t('link')}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
