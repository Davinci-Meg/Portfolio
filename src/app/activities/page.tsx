'use client';

import { LanguageProvider, useTranslation } from '@/hooks/useTranslation';
import { activitiesData } from '@/lib/data/activities';
import { useReveal, revealDelay } from '@/hooks/useReveal';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function ActivitiesPageContent() {
  const { currentLanguage } = useTranslation();
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background">
      <div className="container-page py-24 md:py-32">
        <Link
          href="/#activities"
          className="inline-flex items-center gap-2 text-eyebrow hover:text-foreground transition-colors mb-16 md:mb-24"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Portfolio</span>
        </Link>

        <p className="text-eyebrow mb-6" data-reveal="">Index / Activities</p>
        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>
          <h1 className="text-section-title">Exhibitions &amp; Activities</h1>
          <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {activitiesData.length} )</span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 pb-4 border-b border-foreground text-eyebrow">
          <span className="col-span-8">{currentLanguage === 'ja' ? 'タイトル' : 'Title'}</span>
          <span className="hidden md:block md:col-span-3">{currentLanguage === 'ja' ? '役割' : 'Role'}</span>
        </div>

        <ul>
          {activitiesData.map((activity, index) => (
            <li key={activity.id} className="border-b border-rule group" data-reveal="" style={revealDelay(Math.min(index, 5))}>
              <a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 gap-4 md:gap-8 py-5 md:py-6 items-baseline cursor-pointer transition-colors hover:bg-rule/30"
              >
                <h3 className="col-span-12 md:col-span-8 text-base md:text-xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                  {activity.title[currentLanguage]}
                </h3>
                <p className="col-span-10 md:col-span-3 text-sm md:text-base text-foreground-muted">
                  {activity.role[currentLanguage]}
                </p>
                <span className="col-span-2 md:col-span-1 flex justify-end text-foreground-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <LanguageProvider>
      <ActivitiesPageContent />
    </LanguageProvider>
  );
}
