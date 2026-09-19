import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Reveal} from './Reveal';
import {SectionHead} from './SectionHead';

const ITEMS = [
  {key: 'flocash', src: '/partners/flocash-mark.png'},
  {key: 'mawarid', src: '/partners/mawarid-mark.png'},
  {key: 'afs', src: '/partners/afs-mark.png'},
  {key: 'odoo', src: '/partners/odoo-mark.png'}
] as const;

export function Partners() {
  const t = useTranslations('partners');

  return (
    <section id="partners" className="bg-paper py-24 scroll-mt-[84px] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHead title={t('title')} body={t('body')} />
        </Reveal>

        <ul className="mt-16 divide-y divide-ink/12 border-y border-ink/12">
          {ITEMS.map(({key, src}, i) => (
            <Reveal as="li" key={key} delay={0.06 * i}>
              <div className="grid items-center gap-6 py-9 md:grid-cols-[190px_minmax(0,1fr)_170px] md:gap-10">
                <div className="relative h-12 w-[180px]">
                  <Image
                    src={src}
                    alt={t(`items.${key}.name`)}
                    fill
                    sizes="180px"
                    className="object-contain object-left rtl:object-right"
                  />
                </div>
                <div>
                  <p className="font-display text-[1.15rem] text-ink">
                    {t(`items.${key}.name`)}
                    <span className="ms-3 text-[0.9rem] text-body">{t(`items.${key}.role`)}</span>
                  </p>
                  <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-[1.65] text-body">
                    {t(`items.${key}.supplies`)}
                  </p>
                </div>
                <p className="text-[0.9rem] text-ink/70 md:text-end">{t(`items.${key}.status`)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
