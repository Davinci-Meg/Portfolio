'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { publicationsData } from '@/lib/data/publications';
import { Section } from '@/components/ui/Section';
import { revealDelay } from '@/hooks/useReveal';

export function Publications() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="publications">
      <p className="text-eyebrow mb-6" data-reveal="">03 / Publications</p>
      <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
        <h2 className="text-section-title">{t('sections.publications')}</h2>
        <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {publicationsData.length} )</span>
      </div>

      <ul className="border-t border-foreground">
        {publicationsData.map((publication, index) => (
          <li
            key={publication.id}
            className="border-b border-rule py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8"
            data-reveal=""
            style={revealDelay(Math.min(index, 5))}
          >
            <p className="col-span-12 md:col-span-3 text-sm font-mono text-foreground-muted leading-relaxed">
              {publication.authors[currentLanguage]}
            </p>
            <div className="col-span-12 md:col-span-9">
              <h3 className="text-lg md:text-2xl font-medium leading-snug tracking-tight mb-3">
                &ldquo;{publication.title[currentLanguage]}&rdquo;
              </h3>
              <p className="text-sm md:text-base text-foreground-muted">
                {publication.venue[currentLanguage]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}