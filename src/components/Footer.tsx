import {useTranslations} from 'next-intl';
import {Pattern} from './Pattern';
import {Mark, Wordmark} from './Mark';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-emerald-deep text-on-dark">
      <Pattern tint="#1B4A3B" opacity={0.55} size={480} fade="top" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 pb-14 pt-24 text-center md:px-10 md:pt-28">
        <Mark variant="gold" className="h-[76px] w-auto opacity-95" />
        <Wordmark variant="white" className="mt-8 h-[13px] w-auto opacity-85" />

        <p className="mt-7 text-[1rem] text-on-dark/78">{t('entity')}</p>
        <p className="mt-1.5 text-[0.95rem] text-on-dark/70">{t('location')}</p>

        <p className="mt-9 max-w-[54ch] text-[0.92rem] leading-[1.7] text-on-dark/70">
          {t('partners')}
        </p>

        <p className="mt-14 text-[0.82rem] text-on-dark/66">
          © {year} {t('entity')}. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
