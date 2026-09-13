'use client';

import {useRef} from 'react';
import {useTranslations} from 'next-intl';
import {motion, useInView, useReducedMotion} from 'motion/react';
import {Pattern} from './Pattern';
import {SectionHead} from './SectionHead';

const STEPS = ['onboard', 'fund', 'issue', 'book', 'settle'] as const;

export function HowItWorks() {
  const t = useTranslations('how');
  const reduced = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, {once: true, margin: '0px 0px -140px 0px'});

  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-cream py-24 scroll-mt-[84px] md:py-32"
    >
      <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="both" />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <SectionHead title={t('title')} body={t('body')} align="center" />

        <ol ref={ref} className="relative mt-20 grid gap-y-14 md:grid-cols-5 md:gap-x-7">
          {/* One rail, running dot-centre to dot-centre, drawn once. */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[7px] hidden h-px md:block"
            style={{insetInlineStart: 'calc(10% - 11.2px)', width: 'calc(80% + 22.4px)'}}
          >
            <div className="absolute inset-0 bg-ink/15" />
            <motion.div
              className="absolute inset-0 origin-[left_center] bg-gold rtl:origin-[right_center]"
              initial={reduced ? {scaleX: 1} : {scaleX: 0}}
              animate={reduced ? {scaleX: 1} : inView ? {scaleX: 1} : {scaleX: 0}}
              transition={{duration: reduced ? 0 : 1.4, ease: 'easeInOut', delay: reduced ? 0 : 0.15}}
            />
          </div>

          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              data-reveal
              className="flex flex-col items-center text-center"
              initial={reduced ? false : {opacity: 0, y: 18}}
              animate={reduced ? false : inView ? {opacity: 1, y: 0} : {opacity: 0, y: 18}}
              transition={{duration: 0.5, delay: 0.25 + i * 0.14, ease: [0.22, 0.61, 0.36, 1]}}
            >
              <span
                aria-hidden
                className="block h-[15px] w-[15px] rounded-full border-[3px] border-cream bg-gold"
              />
              <p className="mt-6 text-[0.82rem] text-ink/55 tabular">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1.5 font-display text-[1.3rem] text-ink">
                {t(`steps.${step}.label`)}
              </h3>
              <p className="mt-2.5 max-w-[24ch] text-[0.93rem] leading-[1.65] text-body">
                {t(`steps.${step}.desc`)}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mx-auto mt-20 max-w-[86ch] border-t border-ink/15 pt-10 text-center">
          <p className="text-[0.92rem] text-ink/55">{t('outcomeLabel')}</p>
          <p className="mt-4 text-[1.02rem] leading-[1.8] text-body text-pretty">{t('outcome')}</p>
        </div>
      </div>
    </section>
  );
}
