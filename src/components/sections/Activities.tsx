'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { activitiesData } from '@/lib/data/activities';
import { Section } from '@/components/ui/Section';
import { revealDelay } from '@/hooks/useReveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Activities() {
  const { t, currentLanguage } = useTranslation();
  const selectedActivities = activitiesData.filter(a => a.selected);

  return (
    <Section id="activities">
      <p className="text-eyebrow mb-6" data-reveal="">06 / Activities</p>
      <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
        <h2 className="text-section-title">{t('sections.activities')}</h2>
        <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {selectedActivities.length} )</span>
      </div>

      <ul className="border-t border-foreground">
        {selectedActivities.map((activity, index) => (
          <li key={activity.id} className="border-b border-rule group" data-reveal="" style={revealDelay(Math.min(index, 5))}>
            <a
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline cursor-pointer transition-colors hover:bg-rule/30"
            >
              <div className="col-span-12 md:col-span-8">
                <h3 className="text-lg md:text-2xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                  {activity.title[currentLanguage]}
                </h3>
              </div>
              <p className="col-span-10 md:col-span-3 text-sm md:text-base text-foreground-muted">
                {activity.role[currentLanguage]}
              </p>
              <span className="col-span-2 md:col-span-1 flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 md:mt-16" data-reveal="">
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 text-eyebrow text-sm text-foreground hover:text-accent transition-colors"
        >
          {t('ui.viewAll')} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}