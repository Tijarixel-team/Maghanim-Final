'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LanguageSelector() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <button
      type="button"
      onClick={() => router.push(pathname, {locale: nextLocale})}
      className="language-switch nav-link pb-1.5 font-medium uppercase"
      lang={nextLocale}
      data-language={nextLocale}
      aria-label={t('switchLabel')}
    >
      {t('switchTo')}
    </button>
  );
}
