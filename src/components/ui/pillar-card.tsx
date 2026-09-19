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
      className="group"
    >
      <div className="flex flex-col gap-4 rounded-lg border border-[#E8E8E8] bg-white p-6 transition-shadow duration-200 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        style={{boxShadow: '0 1px 3px rgba(0,0,0,0.05)'}}>
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] bg-teal-100">
          {icon}
        </div>
        <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-[#0B0B0B]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#6B6B6B]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
