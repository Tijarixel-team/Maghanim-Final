'use client';

import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';

/**
 * The coin has weight. A 14px rise over 5s against a ±3.5° tilt on an 8s
 * period, so the two never lock into a bounce, plus a contact shadow that
 * compresses as it rises. Reduced motion parks it.
 *
 * It is never the LCP element: the headline renders first and the coin loads
 * at low priority into a reserved box, so nothing shifts when it arrives.
 */
export function Coin({alt = ''}: {alt?: string}) {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none relative w-full">
      <motion.div
        className="relative aspect-square w-full"
        animate={reduced ? undefined : {y: [0, -14, 0], rotate: [-3.5, 3.5, -3.5]}}
        transition={
          reduced
            ? undefined
            : {
                y: {duration: 5, repeat: Infinity, ease: 'easeInOut'},
                rotate: {duration: 8, repeat: Infinity, ease: 'easeInOut'}
              }
        }
        style={{willChange: reduced ? undefined : 'transform'}}
      >
        <Image
          src="/brand/coin.png"
          alt={alt}
          fill
          sizes="(max-width: 640px) 72vw, 380px"
          priority={false}
          loading="lazy"
          className="object-contain drop-shadow-[0_18px_28px_rgba(7,32,25,0.38)]"
        />
      </motion.div>

    </div>
  );
}
