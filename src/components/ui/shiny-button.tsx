'use client';

import type {ReactNode} from 'react';
import {Link} from '@/i18n/navigation';
import {clsx} from '@/lib/clsx';

type Size = 'sm' | 'md';

/**
 * The primary action. A rotating conic ring plus an inner shimmer, in gold on
 * emerald rather than the source component's blue-on-black.
 *
 * The CSS lives in globals.css rather than a styled-jsx block: `@property` and
 * `@keyframes` are global at-rules, and scoping them per instance duplicates
 * the registration on every button on the page.
 */
export function ShinyButton({
  children,
  href,
  onClick,
  type = 'button',
  disabled,
  size = 'md',
  className = ''
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  size?: Size;
  className?: string;
}) {
  const classes = clsx('shiny-cta', size === 'sm' && 'shiny-cta--sm', className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
}
