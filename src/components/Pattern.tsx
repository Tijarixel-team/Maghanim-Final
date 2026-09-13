import {clsx} from '@/lib/clsx';

type Fade = 'both' | 'bottom' | 'top' | 'none';

const FADE: Record<Fade, string> = {
  both:   'linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)',
  bottom: 'linear-gradient(to bottom, #000 0%, #000 62%, transparent)',
  top:    'linear-gradient(to bottom, transparent, #000 38%, #000 100%)',
  none:   'none'
};

/**
 * Texture, not decoration. The tile is a tintable alpha mask, so the line
 * colour is a token and the opacity stays under 12%. A second mask fades the
 * field at the section boundary so it never ends on a hard edge.
 */
export function Pattern({
  tint = 'var(--color-gold)',
  opacity = 0.12,
  size = 440,
  fade = 'both',
  className
}: {
  tint?: string;
  opacity?: number;
  size?: number;
  fade?: Fade;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={clsx('pointer-events-none absolute inset-0 overflow-hidden', className)}
      style={{
        maskImage: FADE[fade],
        WebkitMaskImage: FADE[fade]
      }}
    >
      <div
        className="pattern-field absolute inset-0"
        style={
          {
            backgroundColor: tint,
            opacity,
            '--pattern-size': `${size}px`
          } as React.CSSProperties
        }
      />
    </div>
  );
}
