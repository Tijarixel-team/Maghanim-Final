import {setRequestLocale} from 'next-intl/server';
import {Header} from '@/components/Header';
import {Hero} from '@/components/Hero';
import {Pillars} from '@/components/Pillars';
import {SolutionExplorer} from '@/components/SolutionExplorer';
import {HowItWorks} from '@/components/HowItWorks';
import {Contact} from '@/components/Contact';
import {Footer} from '@/components/Footer';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Pillars />
        <SolutionExplorer />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
