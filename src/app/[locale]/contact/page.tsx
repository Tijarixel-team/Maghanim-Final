import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {PageHeader} from '@/components/PageHeader';
import {Contact} from '@/components/Contact';

function Head() {
  const t = useTranslations('pages.contact');
  const c = useTranslations('contact');
  return <PageHeader title={t('title')} body={c('body')} />;
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main id="main">
        <Head />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
