'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { Section } from '@/components/ui/Section';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Awards() {
  const { t, currentLanguage } = useTranslation();
  const selectedAwards = awardsData.filter(a => a.selected).sort((a, b) => b.year - a.year);

  return (
    <Section id="awards">
      <div className="flex items-baseline justify-between mb-20 md:mb-32">
        <div>
          <p className="text-eyebrow mb-8">02 / Awards</p>
          <h2 className="text-section-title">{t('sections.awards')}</h2>
        </div>
      </div>

      <ul className="border-t border-rule">
        {selectedAwards.map((award) => (
          <li key={award.id} className="border-b border-rule group">
            <a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-1 md:gap-y-0 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-rule/30"
            >
              <span className="col-span-2 md:col-span-1 text-sm md:text-base font-mono text-foreground-muted">
                {award.year}
              </span>
              <h4 className="col-span-8 md:col-span-8 text-lg md:text-2xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                {award.title[currentLanguage]}
              </h4>
              <span className="col-span-2 md:col-span-1 md:order-last flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              <p className="col-span-10 col-start-3 md:col-span-2 md:col-start-auto text-sm md:text-base text-foreground-muted">
                {award.prize[currentLanguage]}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 md:mt-16">
        <Link
          href="/awards"
          className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-foreground hover:text-accent transition-colors"
        >
          {t('ui.viewAll')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}