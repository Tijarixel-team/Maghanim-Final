import {useTranslations} from 'next-intl';
import {Pattern} from './Pattern';
import {Reveal} from './Reveal';
import {SectionHead} from './SectionHead';
import {PillarIcon} from './PillarIcon';
import {PillarCard} from './ui/pillar-card';

const PILLARS = ['payments', 'cards', 'business', 'financing'] as const;

export function Pillars() {
  const t = useTranslations('platform');

  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden bg-cream pb-16 pt-[calc(min(36vw,190px)+1rem)] scroll-mt-[84px] md:pb-24 md:pt-[214px]"
    >
      <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="both" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHead title={t('title')} body={t('body')} />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((key) => (
              <PillarCard
                key={key}
                icon={<PillarIcon name={key} className="h-8 w-8 text-on-dark/86" />}
                title={t(`pillars.${key}.title`)}
                description={t(`pillars.${key}.desc`)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
