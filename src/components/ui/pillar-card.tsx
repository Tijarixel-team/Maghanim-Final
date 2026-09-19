'use client';

import {ReactNode} from 'react';
import {motion} from 'framer-motion';
import {Pattern} from '../Pattern';

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function PillarCard({icon, title, description}: PillarCardProps) {
  return (
    <motion.div
      whileHover={{y: -3}}
      transition={{type: 'spring', stiffness: 400, damping: 30}}
      className="group relative isolate h-full overflow-hidden rounded-2xl bg-emerald-base text-on-dark"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_60%,var(--color-emerald-deep)_100%)]"
      />
      <Pattern tint="var(--color-gold)" opacity={0.08} size={360} fade="both" />

      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <div className="flex justify-center">
          {icon}
        </div>
        <h3 className="mt-6 font-display text-lg tracking-[-0.01em] text-cream">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-on-dark/80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
