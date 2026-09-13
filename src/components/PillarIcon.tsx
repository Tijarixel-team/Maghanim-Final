/**
 * Icons drawn on the same geometric logic as the pattern: straight strokes,
 * 45° turns, one weight, no fills. They read as engraved, not as a UI kit.
 */
const PATHS: Record<string, React.ReactNode> = {
  payments: (
    <>
      <rect x="3" y="7" width="26" height="18" rx="1" />
      <path d="M3 13h26M8 20h7" />
    </>
  ),
  cards: (
    <>
      <rect x="2" y="8" width="22" height="15" rx="1" />
      <path d="M8 9V6h22v15h-6" />
      <path d="M2 13h22" />
    </>
  ),
  business: (
    <>
      <path d="M4 27V9l12-6 12 6v18" />
      <path d="M4 27h24M11 27v-8h10v8" />
      <path d="M16 9.5l3.5 3.5L16 16.5 12.5 13z" />
    </>
  ),
  financing: (
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 5v22M9 12l14 8M23 12L9 20" />
    </>
  )
};

export function PillarIcon({name, className}: {name: string; className?: string}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
