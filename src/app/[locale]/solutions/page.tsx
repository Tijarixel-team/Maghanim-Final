import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {PageHeader} from '@/components/PageHeader';
import {PlaceholderNote} from '@/components/PlaceholderNote';
import {Pattern} from '@/components/Pattern';
import {Reveal} from '@/components/Reveal';
import {PillarIcon} from '@/components/PillarIcon';

const AREAS = ['payments', 'cards', 'business', 'financing'] as const;

function Body() {
  const t = useTranslations('pages.solutions');
  const e = useTranslations('explorer');
  const p = useTranslations('platform');

  return (
    <>
      <PageHeader title={t('title')} body={t('body')} />

      {AREAS.map((area, i) => {
        const features = e.raw(`${area}.features`) as string[];
        const light = i % 2 === 0;
        return (
          <section
            key={area}
            id={area}
            className={`relative isolate overflow-hidden py-20 md:py-28 ${light ? 'bg-cream' : 'bg-paper'}`}
          >
            {light && <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="both" />}
            <div className="relative mx-auto grid max-w-[1400px] gap-x-16 gap-y-8 px-6 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
              <Reveal>
                <div>
                  <PillarIcon name={area} className="h-9 w-9 text-ink/60" />
                  <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] text-ink text-balance">
                    {e(`${area}.headline`)}
                  </h2>
                  <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.78] text-body">
                    {e(`${area}.body`)}
                  </p>
                  <p className="mt-7 border-t border-ink/12 pt-4 text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-ink/70">
                    {p(`pillars.${area}.partner`)}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-baseline gap-3.5 border-b border-ink/10 py-3.5 text-[0.95rem] text-ink/88"
                    >
                      <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ink/45" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="bg-paper pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <PlaceholderNote>{t('note')}</PlaceholderNote>
        </div>
      </section>
    </>
  );
}

export default async function SolutionsPage({params}: {params: Promise<{locale: string}>}) {
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
