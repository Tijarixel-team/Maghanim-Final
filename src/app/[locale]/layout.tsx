import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Marcellus, Archivo, Amiri, Noto_Sans_Arabic} from 'next/font/google';
import {routing} from '@/i18n/routing';
import '../globals.css';

const display = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-display-face'
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo'
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-amiri'
});

const notoAr = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-noto-ar'
});

// Vercel may expose an unset environment variable as an empty string. URL()
// rejects that value, so normalize it before using it as the metadata origin.
const configuredSite = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const SITE = configuredSite || 'http://localhost:3210';

/** Unwritten copy must never reach a search result or a social card. */
const written = (value: string) => (value.trim().startsWith('[') ? null : value);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({locale, namespace: 'meta'});
  const en = await getTranslations({locale: 'en', namespace: 'meta'});

  const title = written(t('title')) ?? en('title');
  const description = written(t('description')) ?? en('description');
  const approved = Boolean(written(t('description')));

  return {
    metadataBase: new URL(SITE),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {en: '/en', ar: '/ar', 'x-default': '/en'}
    },
    openGraph: {
      type: 'website',
      title,
      description,
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      siteName: 'Maghanim'
    },
    // Nothing is indexed until this locale's copy is approved and a real origin
    // is configured. Set NEXT_PUBLIC_SITE_URL and approve the copy to publish.
    robots:
      approved && configuredSite
        ? {index: true, follow: true}
        : {index: false, follow: false}
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${display.variable} ${archivo.variable} ${amiri.variable} ${notoAr.variable}`}
    >
      <head>
        {/* Scroll entrances must never be the reason content is missing. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
