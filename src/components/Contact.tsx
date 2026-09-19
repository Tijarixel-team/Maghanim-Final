import {useTranslations} from 'next-intl';
import {Pattern} from './Pattern';
import {Reveal} from './Reveal';
import {SectionHead} from './SectionHead';
import {Mark} from './Mark';
import {ContactForm} from './ContactForm';

export function Contact() {
  const t = useTranslations('contact');
  const tf = useTranslations('footer');

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-cream py-16 md:py-24 scroll-mt-[84px]">
      <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="top" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <SectionHead title={t('title')} body={t('body')} />
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-12 flex items-center gap-5 border-t border-ink/12 pt-8">
                <Mark variant="gold" className="h-11 w-auto shrink-0" />
                <p className="text-[0.92rem] leading-[1.6] text-body">
                  {tf('location')}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
