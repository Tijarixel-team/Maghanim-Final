/**
 * One header shape for every section on the page. Heading and its supporting
 * line share a single left-aligned column at a fixed measure, so the reader
 * lands in the same place in every section instead of hunting for the entry
 * point each time.
 */
export function SectionHead({
  title,
  body,
  align = 'start'
}: {
  title: string;
  body?: string;
  align?: 'start' | 'center';
}) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-[62ch] text-center' : 'max-w-[62ch]'}>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.16] tracking-[-0.012em] text-ink text-balance">
        {title}
      </h2>
      {body && (
        <p className="mt-6 text-[1.0625rem] leading-[1.75] text-body text-pretty">{body}</p>
      )}
    </div>
  );
}
