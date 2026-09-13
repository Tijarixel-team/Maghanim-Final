'use client';

import {motion, useReducedMotion} from 'motion/react';
import type {ReactNode} from 'react';

/**
 * Scroll entrance: a 20px rise, once, staggered by the caller.
 *
 * Two things this deliberately does NOT do. It does not animate at all when the
 * visitor asks for reduced motion — they get the content, not a slower version
 * of the effect. And it carries data-reveal so the no-JS rule in the layout can
 * force it visible: content that only appears once a script runs is content
 * that can fail to appear.
 */
export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'li' | 'section';
  className?: string;
}) {
  const reduced = useReducedMotion();
  const M = motion[as];
  const Plain = as;

  if (reduced) {
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <M
      data-reveal
      className={className}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '0px 0px -90px 0px'}}
      transition={{duration: 0.62, delay, ease: [0.22, 0.61, 0.36, 1]}}
    >
      {children}
    </M>
  );
}
