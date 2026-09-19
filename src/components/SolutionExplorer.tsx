'use client';

import {useEffect, useId, useRef, useState} from 'react';
import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {clsx} from '@/lib/clsx';
import {SectionHead} from './SectionHead';

const TABS = ['payments', 'cards', 'business', 'financing'] as const;
type Tab = (typeof TABS)[number];

/** Where each label sits on the dial, clockwise from twelve. */
const SEAT = [
  'top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 text-center',
  'end-0 top-1/2 -translate-y-1/2 text-end rtl:text-start',
  'bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 text-center',
  'start-0 top-1/2 -translate-y-1/2 text-start rtl:text-end'
];
const DOT = ['top-0 start-1/2', 'end-0 top-1/2', 'bottom-0 start-1/2', 'start-0 top-1/2'];

export function SolutionExplorer() {
  const t = useTranslations('explorer');
  const locale = useLocale();
  const rtl = locale === 'ar';
  const reduced = useReducedMotion();
  const [active, setActive] = useState<Tab>('payments');
  const [viaKey, setViaKey] = useState(false);
  const id = useId();
  const listRef = useRef<HTMLDivElement>(null);

  const index = TABS.indexOf(active);
  const partner = t(`${active}.partner`);
  const features = t.raw(`${active}.features`) as string[];
  const note = active === 'financing' ? t('financing.note') : null;
  const enterX = reduced ? 0 : rtl ? -22 : 22;

  useEffect(() => {
    if (!viaKey) return;
    listRef.current
      ?.querySelector<HTMLButtonElement>(`#${CSS.escape(`${id}-tab-${active}`)}`)
      ?.focus();
    setViaKey(false);
  }, [active, viaKey, id]);

  const step = (delta: number) =>
    setActive(TABS[(TABS.indexOf(active) + delta + TABS.length) % TABS.length]);

  // The dial turns the short way round, and keeps turning in one direction
  // rather than snapping back through zero.
  const turn = useRef(0);
  const prev = useRef(0);
  const diff = ((index - prev.current + 6) % 4) - 2;
  turn.current += diff === -2 ? 2 : diff;
  prev.current = index;
  const angle = turn.current * 90 * (rtl ? -1 : 1);

  return (
    <section id="solutions" className="bg-paper py-24 scroll-mt-[84px] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead title={t('title')} body={t('intro')} />

        <div className="mt-16 grid items-center gap-x-20 gap-y-14 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]">
          {/* ── the dial ───────────────────────────────────────────────── */}
          <div
            ref={listRef}
            role="tablist"
            aria-label={t('hint')}
            aria-orientation="horizontal"
            className="relative mx-auto aspect-square w-full max-w-[430px]"
          >
            <div aria-hidden className="absolute inset-[24%] rounded-full border border-ink/12" />

            {TABS.map((tab, i) => (
              <span
                key={`dot-${tab}`}
                aria-hidden
                className={clsx(
                  'absolute z-10 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 rtl:translate-x-1/2',
                  DOT[i],
                  tab === active ? 'bg-gold' : 'bg-ink/20'
                )}
                style={{
                  insetInlineStart: i === 0 || i === 2 ? '50%' : i === 1 ? '76%' : '24%',
                  top: i === 1 || i === 3 ? '50%' : i === 0 ? '24%' : '76%'
                }}
              />
            ))}

            {/* the coin is the control: it turns to the group you choose */}
            <motion.button
              type="button"
              onClick={() => step(1)}
              aria-label={t('next')}
              className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              animate={reduced ? undefined : {rotate: angle}}
              transition={
                reduced ? undefined : {type: 'spring', stiffness: 55, damping: 14, mass: 1.1}
              }
            >
              <Image
                src="/brand/coin.png"
                alt=""
                width={380}
                height={380}
                className="h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(7,32,25,0.3)]"
              />
            </motion.button>

            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                id={`${id}-tab-${tab}`}
                aria-selected={tab === active}
                aria-controls={`${id}-panel`}
                tabIndex={tab === active ? 0 : -1}
                onClick={() => setActive(tab)}
                onKeyDown={(e) => {
                  const fwd = rtl ? 'ArrowLeft' : 'ArrowRight';
                  const back = rtl ? 'ArrowRight' : 'ArrowLeft';
                  if (e.key === 'ArrowDown' || e.key === fwd) {
                    e.preventDefault(); setViaKey(true); step(1);
                  }
                  if (e.key === 'ArrowUp' || e.key === back) {
                    e.preventDefault(); setViaKey(true); step(-1);
                  }
                }}
                className={clsx(
                  'absolute z-10 w-[7.6rem] font-display text-[1.02rem] leading-tight transition-colors duration-200',
                  SEAT[i],
                  tab === active ? 'text-ink' : 'text-ink/70 hover:text-ink'
                )}
              >
                {t(`${tab}.label`)}
              </button>
            ))}
          </div>

          {/* ── the panel ──────────────────────────────────────────────── */}
          <div className="relative min-h-[22rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                role="tabpanel"
                id={`${id}-panel`}
                initial={{opacity: 0, x: enterX}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -enterX}}
                transition={{duration: reduced ? 0.15 : 0.4, ease: [0.22, 0.61, 0.36, 1]}}
              >
                <h3 className="max-w-[20ch] font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.22] text-ink">
                  {t(`${active}.headline`)}
                </h3>
                <p className="mt-4 max-w-[54ch] text-[1rem] leading-[1.76] text-body">
                  {t(`${active}.body`)}
                </p>

                <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-baseline gap-3.5 border-b border-ink/10 py-3.5 text-[0.95rem] text-ink/88"
                    >
                      <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ink/45" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-[0.92rem] leading-[1.6] text-body">
                  {t('attribution')} <span className="text-ink">{partner}</span>
                  {note && <span className="ms-3 text-ink/70">· {note}</span>}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
