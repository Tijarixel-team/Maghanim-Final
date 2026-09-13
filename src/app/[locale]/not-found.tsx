import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Pattern} from '@/components/Pattern';
import {Mark} from '@/components/Mark';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center bg-emerald-base px-6 text-center text-on-dark">
      <Pattern tint="var(--color-gold)" opacity={0.08} size={520} fade="both" />
      <div className="relative">
        <Mark className="mx-auto h-16 w-auto" />
        <h1 className="mt-10 font-display text-4xl leading-tight sm:text-5xl">{t('title')}</h1>
        <p className="mt-4 text-on-dark/70">{t('body')}</p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-gold px-9 py-4 text-sm font-semibold tracking-[0.11em] text-emerald-deep uppercase transition-colors hover:bg-gold-light"
        >
          {t('cta')}
        </Link>
      </div>
    </main>
  );
}
