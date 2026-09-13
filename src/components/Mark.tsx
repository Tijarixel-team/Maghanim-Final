import Image from 'next/image';
import {clsx} from '@/lib/clsx';

/** The calligraphic mark. Never recoloured, stretched or redrawn — the gold and
 *  white files are the artwork, and the logo never mirrors in RTL. */
export function Mark({
  variant = 'gold',
  className,
  priority
}: {
  variant?: 'gold' | 'white' | 'black';
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/brand/mark-${variant}-tight.svg`}
      alt=""
      width={800}
      height={599}
      priority={priority}
      className={clsx('select-none', className)}
      aria-hidden
    />
  );
}

/** The official wordmark. It is artwork, never a typed substitute. */
export function Wordmark({
  variant = 'black',
  className
}: {
  variant?: 'black' | 'white' | 'gold';
  className?: string;
}) {
  return (
    <Image
      src={`/brand/wordmark-${variant}-tight.svg`}
      alt="Maghanim"
      width={249}
      height={42}
      className={clsx('select-none', className)}
    />
  );
}
