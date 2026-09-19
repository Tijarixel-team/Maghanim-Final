'use client';

import {ReactNode} from 'react';
import {motion} from 'framer-motion';

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function PillarCard({icon, title, description}: PillarCardProps) {
  return (
    <motion.div
      whileHover={{y: -4}}
      transition={{type: 'spring', stiffness: 400, damping: 30}}
      className="group relative overflow-hidden rounded-lg"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_82%_64%_at_50%_26%,var(--color-emerald-lit)_0%,var(--color-emerald-base)_50%,var(--color-emerald-deep)_100%)]"
      />
      <div className="relative flex flex-col gap-4 p-6 transition-shadow duration-200 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
        style={{boxShadow: '0 1px 3px rgba(0,0,0,0.08)'}}>
        <div className="inline-flex h-14 w-14 items-center justify-center border border-on-dark/15 bg-on-dark/[0.06]">
          {icon}
        </div>
        <h3 className="font-display text-lg tracking-[-0.01em] text-cream">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-on-dark/80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
