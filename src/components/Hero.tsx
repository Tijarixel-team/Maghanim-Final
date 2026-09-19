import {useTranslations} from 'next-intl';
import {ShinyButton} from './ui/shiny-button';
import {Pattern} from './Pattern';
import {Mark} from './Mark';
import {Coin} from './Coin';

export function Hero() {
  const t = useTranslations('hero');

  return (
    // z-20 lifts the whole hero above the section that follows, so the coin can
    // break the fold and sit in front of the cream band rather than behind it.
    <section className="relative isolate z-20 bg-emerald-base text-on-dark">
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_82%_64%_at_50%_26%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_50%,var(--color-emerald-deep)_100%)]"
      />
      <Pattern tint="var(--color-gold)" opacity={0.095} size={520} fade="bottom" />

      <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 pb-[34vh] pt-[110px] text-center md:px-10">
        <Mark variant="gold" priority className="h-[68px] w-auto md:h-[84px]" />

        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.1rem,5.6vw,3.9rem)] leading-[1.16] tracking-[-0.012em] text-cream text-balance md:mt-10">
          {t('headline')}
        </h1>

        <p className="mt-6 max-w-[50ch] text-[clamp(0.95rem,1.35vw,1.0625rem)] leading-[1.72] text-on-dark/72 text-pretty">
          {t('sub')}
        </p>

        <div className="mt-9">
          <ShinyButton href="/#contact" size="sm">
            {t('cta')}
          </ShinyButton>
        </div>

        <div className="mt-[2.5rem] w-full">
          <p className="mb-1 text-center text-[0.6875rem] uppercase tracking-[0.14em] text-on-dark/70">
            In partnership with
          </p>
          <div className="flex flex-nowrap items-center justify-center gap-[clamp(18px,5.3vw,68px)]">
            <img
              src="/partners/hero/flocash.png"
              alt="flocash"
              className="h-[clamp(44px,13vw,68px)] w-auto flex-none opacity-[0.72]"
            />
            <img
              src="/partners/hero/odoo.png"
              alt="odoo"
              className="h-[clamp(44px,13vw,68px)] w-auto flex-none opacity-[0.72]"
            />
            <img
              src="/partners/hero/afs.png"
              alt="afs"
              className="h-[clamp(44px,13vw,68px)] w-auto flex-none opacity-[0.72]"
            />
            <img
              src="/partners/hero/mawarid.png"
              alt="mawarid"
              className="h-[clamp(44px,13vw,68px)] w-auto flex-none opacity-[0.72]"
            />
          </div>
        </div>
      </div>

      {/* The coin straddles the fold: half of it is below the first screen, so
          the page tells you there is more without a scroll cue to explain it.
          Nothing paints over it, and it never intercepts a click. */}
      <div className="pointer-events-none absolute bottom-0 start-1/2 z-30 w-[380px] max-w-[72vw] -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2">
        <Coin alt={t('coinAlt')} />
      </div>
    </section>
  );
}
