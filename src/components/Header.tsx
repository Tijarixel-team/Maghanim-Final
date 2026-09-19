'use client';

import {useEffect, useRef, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from '@/i18n/navigation';
import {Link} from '@/i18n/navigation';
import {Mark, Wordmark} from './Mark';
import {clsx} from '@/lib/clsx';

const LINKS = [
  {href: '/', key: 'home'},
  {href: '/contact', key: 'contact'}
] as const;

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the panel and hands focus back to the control that opened it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const other = locale === 'en' ? 'ar' : 'en';

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        lifted && 'bg-emerald-base/92 backdrop-blur-md'
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-emerald-deep"
      >
        {t('skip')}
      </a>

      <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3.5" aria-label="Maghanim">
          <Mark variant="gold" priority className="h-9 w-auto" />
          <Wordmark variant="white" className="mt-0.5 h-[11px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label={t('menu')}>
          {LINKS.map(({href, key}) => {
            const active = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'border-b-[1.5px] pb-1.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors',
                  active
                    ? 'border-gold-light text-gold-light'
                    : 'border-transparent text-on-dark/76 hover:text-on-dark'
                )}
              >
                {t(key)}
              </Link>
            );
          })}

          <Link
            href={pathname}
            locale={other}
            hrefLang={other}
            aria-label={t('switchLabel')}
            className="ms-2 border-s border-on-dark/22 ps-7 text-[13px] text-on-dark/76 transition-colors hover:text-on-dark"
          >
            {t('switchTo')}
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-me-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? t('close') : t('menu')}</span>
          <span aria-hidden className="relative block h-3.5 w-6">
            <span
              className={clsx(
                'absolute inset-x-0 top-0 h-px bg-on-dark transition-transform duration-300',
                open && 'translate-y-[6.5px] rotate-45'
              )}
            />
            <span
              className={clsx(
                'absolute inset-x-0 top-1/2 h-px bg-on-dark transition-opacity duration-200',
                open && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'absolute inset-x-0 bottom-0 h-px bg-on-dark transition-transform duration-300',
                open && '-translate-y-[6.5px] -rotate-45'
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-on-dark/12 bg-emerald-base/97 backdrop-blur-md lg:hidden"
      >
        <nav className="mx-auto max-w-[1400px] px-6 py-5" aria-label={t('menu')}>
          {LINKS.map(({href, key}) => (
            <Link
              key={key}
              href={href}
              className="block border-b border-on-dark/10 py-4 text-sm uppercase tracking-[0.18em] text-on-dark/86"
            >
              {t(key)}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={other}
            hrefLang={other}
            aria-label={t('switchLabel')}
            className="mt-5 inline-block text-sm text-gold-light"
          >
            {t('switchTo')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
