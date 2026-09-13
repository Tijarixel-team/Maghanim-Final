import {Pattern} from './Pattern';
import {Mark} from './Mark';

export function PageHeader({title, body}: {title: string; body?: string}) {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-base pb-20 pt-[172px] text-on-dark md:pb-24 md:pt-[196px]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_86%_at_50%_18%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_54%,var(--color-emerald-deep)_100%)]"
      />
      <Pattern tint="var(--color-gold)" opacity={0.085} size={520} fade="bottom" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Mark variant="gold" className="h-11 w-auto" />
        <h1 className="mt-10 max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.17] tracking-[-0.012em] text-cream text-balance">
          {title}
        </h1>
        {body && (
          <p className="mt-7 max-w-[58ch] text-[1.02rem] leading-[1.8] text-on-dark/72 text-pretty">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
