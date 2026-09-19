'use client';

import {useEffect, useRef, useState, type ReactNode} from 'react';
import {Warp} from '@paper-design/shaders-react';
import {useReducedMotion} from 'motion/react';

export type ShaderCard = {
  key: string;
  title: string;
  description: string;
  icon: ReactNode;
};

/**
 * Cards whose ground is a live shader rather than a flat fill.
 *
 * Every card runs the same emerald as the hero — deep, base, lit — so the four
 * read as one material. Only the rotation differs, so no two cards show the
 * same frame while the colour stays identical.
 *
 * Two things the source component did not do, and this build needs:
 * the canvases only mount once the section is on screen, and a visitor who
 * asks for reduced motion gets a still gradient instead of four running
 * WebGL contexts.
 */
const EMERALD = ['#04160F', '#0B3328', '#1E6650', '#3E9B7A'];

export function FeatureShaderCards({cards}: {cards: ShaderCard[]}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLUListElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (typeof IntersectionObserver === 'undefined') {
      setLive(true);
      return;
    }
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      {rootMargin: '200px 0px'}
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <li
          key={card.key}
          className="group relative min-h-[16rem] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-emerald-deep">
            {live && (
              <Warp
                style={{height: '100%', width: '100%'}}
                colors={EMERALD}
                proportion={0.38}
                softness={1}
                distortion={0.22}
                swirl={0.85}
                swirlIterations={10}
                shape="checks"
                shapeScale={0.09}
                scale={1}
                rotation={i * 47}
                speed={reduced ? 0 : 0.42}
              />
            )}
          </div>

          <article className="relative z-10 flex h-full flex-col rounded-3xl border border-cream/15 bg-[linear-gradient(180deg,rgba(4,22,15,0.20),rgba(4,22,15,0.76))] p-8 transition-colors duration-300 group-hover:border-cream/25">
            <div className="flex justify-center">
              {card.icon}
            </div>
            <h3 className="mt-8 font-display text-[1.3rem] leading-snug text-cream">
              {card.title}
            </h3>
            <p className="mt-3 text-[0.95rem] leading-[1.7] text-on-dark/78">
              {card.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
