/**
 * One header shape for every section on the page. Heading and its supporting
 * line share a single left-aligned column at a fixed measure, so the reader
 * lands in the same place in every section instead of hunting for the entry
 * point each time.
 */
export function SectionHead({
  title,
  body,
  align = 'start',
  tone = 'light'
}: {
  title: string;
  body?: string;
  align?: 'start' | 'center';
  tone?: 'light' | 'dark';
}) {
  const centered = align === 'center';
  const onDark = tone === 'dark';
  return (
    <div className={centered ? 'mx-auto max-w-[62ch] text-center' : 'max-w-[62ch]'}>
      <h2 className={`font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.16] tracking-[-0.012em] text-balance ${onDark ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-6 text-[1.0625rem] leading-[1.75] text-pretty ${onDark ? 'text-on-dark/80' : 'text-body'}`}>{body}</p>
      )}
    </div>
  );
}
