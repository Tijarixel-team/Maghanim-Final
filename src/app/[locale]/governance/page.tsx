import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {PageHeader} from '@/components/PageHeader';
import {PlaceholderNote} from '@/components/PlaceholderNote';
import {Pattern} from '@/components/Pattern';
import {Reveal} from '@/components/Reveal';

const ITEMS = ['flocash', 'mawarid', 'afs', 'odoo'] as const;

function Body() {
  const t = useTranslations('pages.governance');
  const g = useTranslations('governance');
  const pr = useTranslations('partners');

  return (
    <>
      <PageHeader title={t('title')} body={t('body')} />

      <section className="relative isolate overflow-hidden bg-cream py-20 md:py-28">
        <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="both" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <h2 className="max-w-[22ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] text-ink text-balance">
              {g('title')}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[60ch] text-[1rem] leading-[1.78] text-body">{g('body')}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <PlaceholderNote>{t('placeholder')}</PlaceholderNote>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="mt-6 max-w-[62ch] text-[1rem] leading-[1.78] text-body">{pr('body')}</p>
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {ITEMS.map((k) => (
              <li key={k} className="border-b border-ink/12 py-5">
                <p className="font-display text-[1.15rem] text-ink">
                  {pr(`items.${k}.name`)}
                </p>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.13em] text-ink/70">
                  {pr(`items.${k}.role`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default async function GovernancePage({params}: {params: Promise<{locale: string}>}) {
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
