'use client';

import { LanguageProvider, useTranslation } from '@/hooks/useTranslation';
import { awardsData } from '@/lib/data/awards';
import { groupByYear } from '@/lib/utils';
import { useReveal, revealDelay } from '@/hooks/useReveal';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function AwardsPageContent() {
  const { currentLanguage } = useTranslation();
  const groupedAwards = groupByYear(awardsData);
  const years = Object.keys(groupedAwards).map(Number).sort((a, b) => b - a);
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background">
      <div className="container-page py-24 md:py-32">
        <Link
          href="/#awards"
          className="inline-flex items-center gap-2 text-eyebrow hover:text-foreground transition-colors mb-16 md:mb-24"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Portfolio</span>
        </Link>

        <p className="text-eyebrow mb-6" data-reveal="">Index / Awards</p>
        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
          <h1 className="text-section-title">Awards &amp; Honors</h1>
          <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {awardsData.length} )</span>
        </div>

        <div>
          {years.map((year) => (
            <section key={year} className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-medium tabular-nums tracking-tight pb-4 border-b border-foreground" data-reveal="">
                {year}
              </h2>
              <ul>
                {groupedAwards[year].map((award, index) => (
                  <li key={award.id} className="border-b border-rule group" data-reveal="" style={revealDelay(Math.min(index, 5))}>
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-rule/30"
                    >
                      <p className="col-span-12 md:col-span-3 text-eyebrow md:text-sm">
                        {award.prize[currentLanguage]}
                      </p>
                      <h3 className="col-span-10 md:col-span-8 text-base md:text-xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                        {award.title[currentLanguage]}
                      </h3>
                      <span className="col-span-2 md:col-span-1 flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <LanguageProvider>
      <AwardsPageContent />
    </LanguageProvider>
  );
}
