'use client';

import {useState, useRef, useEffect} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import {cn} from '@/lib/utils';
import {ChevronDown, Check} from 'lucide-react';

const languages = [
  {code: 'en', label: 'English', flag: '🇬🇧'},
  {code: 'ar', label: 'العربية', flag: '🇸🇦'}
];

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    router.push(pathname, {locale: code});
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm',
          'bg-white/10 backdrop-blur-sm',
          'border-white/20',
          'text-on-dark',
          'hover:bg-white/15 transition-all'
        )}
        aria-label="Change language"
      >
        <span>{selected.flag}</span>
        <span className="hidden sm:inline">{selected.label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={cn(
            'absolute mt-2 w-40 rounded-lg overflow-hidden',
            locale === 'ar' ? 'left-0' : 'right-0',
            'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl',
            'shadow-lg border border-white/20 dark:border-neutral-700',
            'animate-fade-in z-50'
          )}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                'flex items-center gap-2 w-full px-3 py-2.5 text-sm text-left transition-colors',
                selected.code === lang.code
                  ? 'font-semibold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                  : 'text-gray-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800'
              )}
            >
              <span>{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {selected.code === lang.code && (
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
