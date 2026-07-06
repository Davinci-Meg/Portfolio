'use client';

import { Fragment } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/types';

interface LanguageToggleProps {
  className?: string;
}

const LANGUAGES: { code: Language; label: string; ariaLabel: string }[] = [
  { code: 'ja', label: 'JA', ariaLabel: '日本語に切り替え' },
  { code: 'en', label: 'EN', ariaLabel: 'Switch to English' },
];

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { currentLanguage, setLanguage } = useTranslation();

  return (
    <div className={`flex items-baseline gap-2.5 text-xs font-medium tracking-[0.18em] uppercase ${className}`}>
      {LANGUAGES.map(({ code, label, ariaLabel }, index) => (
        <Fragment key={code}>
          {index > 0 && (
            <span aria-hidden="true" className="text-foreground-muted">/</span>
          )}
          <button
            onClick={() => setLanguage(code)}
            aria-label={ariaLabel}
            aria-pressed={currentLanguage === code}
            className={`relative cursor-pointer transition-colors ${
              currentLanguage === code
                ? 'text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-accent'
                : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            {label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
