import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {PageHeader} from '@/components/PageHeader';
import {PlaceholderNote} from '@/components/PlaceholderNote';

function Body() {
  const t = useTranslations('pages.privacy');
  const f = useTranslations('footer');
  return (
    <>
      <PageHeader title={t('title')} />
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <PlaceholderNote>{t('body')}</PlaceholderNote>
        </div>
      </section>
    </>
  );
}

export default async function LegalPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main id="main">
        <Body />
      </main>
      <Footer />
    </>
  );
}
