/** An unfilled decision, shown as one. Never dressed up to read as content. */
export function PlaceholderNote({children}: {children: React.ReactNode}) {
  return (
    <p className="mt-10 border-s border-ink/35 bg-ink/[0.04] px-5 py-4 text-[0.88rem] leading-[1.7] text-ink/75">
      {children}
    </p>
  );
}
