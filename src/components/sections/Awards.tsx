'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { Section } from '@/components/ui/Section';
import { revealDelay } from '@/hooks/useReveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Awards() {
  const { t, currentLanguage } = useTranslation();
  const selectedAwards = awardsData.filter(a => a.selected).sort((a, b) => b.year - a.year);

  return (
    <Section id="awards">
      <p className="text-eyebrow mb-6" data-reveal="">02 / Awards</p>
      <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
        <h2 className="text-section-title">{t('sections.awards')}</h2>
        <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {selectedAwards.length} )</span>
      </div>

      <ul className="border-t border-foreground">
        {selectedAwards.map((award, index) => (
          <li key={award.id} className="border-b border-rule group" data-reveal="" style={revealDelay(Math.min(index, 5))}>
            <a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[auto_1fr_auto] md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-1 md:gap-y-0 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-rule/30 active:bg-rule/40"
            >
              <span className="md:col-span-1 text-sm md:text-base font-mono tabular-nums text-foreground-muted">
                {award.year}
              </span>
              <h4 className="md:col-span-8 text-lg md:text-2xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                {award.title[currentLanguage]}
              </h4>
              <span className="md:col-span-1 md:order-last flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              <p className="col-start-2 md:col-span-2 md:col-start-auto text-sm md:text-base text-foreground-muted">
                {award.prize[currentLanguage]}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 md:mt-16" data-reveal="">
        <Link
          href="/awards"
          className="inline-flex items-center gap-2 text-eyebrow text-sm text-foreground hover:text-accent transition-colors"
        >
          {t('ui.viewAll')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}