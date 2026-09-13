import {useTranslations} from 'next-intl';
import {Pattern} from './Pattern';
import {Reveal} from './Reveal';
import {SectionHead} from './SectionHead';
import {PillarIcon} from './PillarIcon';
import {FeatureShaderCards} from './ui/feature-shader-cards';

const PILLARS = ['payments', 'cards', 'business', 'financing'] as const;

export function Pillars() {
  const t = useTranslations('platform');

  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden bg-cream pb-24 pt-[23vh] scroll-mt-[84px] md:pb-32"
    >
      <Pattern tint="var(--color-gold)" opacity={0.12} size={420} fade="both" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHead title={t('title')} body={t('body')} />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-16">
            <FeatureShaderCards
              cards={PILLARS.map((key) => ({
                key,
                title: t(`pillars.${key}.title`),
                description: t(`pillars.${key}.desc`),
                icon: <PillarIcon name={key} className="h-9 w-9" />
              }))}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
