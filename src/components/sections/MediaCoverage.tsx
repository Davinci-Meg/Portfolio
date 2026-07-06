'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { mediaCoverageData } from '@/lib/data/media';
import { Section } from '@/components/ui/Section';
import { revealDelay } from '@/hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

export function MediaCoverage() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="media">
      <p className="text-eyebrow mb-6" data-reveal="">05 / Media</p>
      <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
        <h2 className="text-section-title">{t('sections.media')}</h2>
        <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {mediaCoverageData.length} )</span>
      </div>

      <ul className="border-t border-foreground">
        {mediaCoverageData.map((media, index) => (
          <li key={media.id} className="border-b border-rule group" data-reveal="" style={revealDelay(Math.min(index, 5))}>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-rule/30"
            >
              <span className="col-span-12 md:col-span-3 text-eyebrow md:text-sm">
                {media.organization}
              </span>
              <div className="col-span-10 md:col-span-8">
                <h3 className="text-lg md:text-2xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                  {media.title[currentLanguage]}
                </h3>
              </div>
              <span className="col-span-2 md:col-span-1 flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="sr-only">{t('ui.viewArticle')}</p>
    </Section>
  );
}