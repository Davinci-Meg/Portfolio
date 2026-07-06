'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { projectsData } from '@/lib/data/projects';
import { getImagePath } from '@/lib/utils';
import { getBlurDataURL } from '@/lib/imageBlur';
import { Section } from '@/components/ui/Section';

export function Projects() {
  const { t, currentLanguage } = useTranslation();

  return (
    <Section id="projects">
      <p className="text-eyebrow mb-6">07 / Projects</p>
      <div className="flex items-baseline justify-between gap-6 mb-4 md:mb-6">
        <h2 className="text-section-title">{t('sections.projects')}</h2>
        <span className="font-mono text-sm md:text-base tabular-nums text-foreground-muted whitespace-nowrap">( {projectsData.length} )</span>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr] gap-x-12 gap-y-6 md:gap-y-8 py-12 md:py-20 border-t border-rule first:border-t-0"
          >
            <header className="order-1 md:order-none md:col-span-5 md:col-start-8 md:row-start-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-eyebrow">{project.category}</span>
                <span className="text-eyebrow">{project.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-2">
                {project.title[currentLanguage]}
              </h3>
              {project.titleEn && currentLanguage === 'ja' && (
                <p className="text-sm text-foreground-muted">
                  {project.titleEn}
                </p>
              )}
            </header>

            <div className="order-2 md:order-none md:col-span-7 md:col-start-1 md:row-start-1 md:row-span-2">
              <div className="aspect-[16/9] relative overflow-hidden bg-rule/40">
                <Image
                  src={getImagePath(project.imagePath)}
                  alt={project.alt[currentLanguage]}
                  fill
                  className="object-cover"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL={getBlurDataURL(project.imagePath)}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  quality={85}
                />
              </div>
            </div>

            <div className="order-3 md:order-none md:col-span-5 md:col-start-8 md:row-start-2 flex flex-col">
              <p className="text-base md:text-[15px] leading-relaxed text-foreground mb-8">
                {project.description[currentLanguage]}
              </p>

              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm mt-auto">
                {project.exhibitions && project.exhibitions.length > 0 && (
                  <>
                    <dt className="text-eyebrow pt-1">
                      {currentLanguage === 'ja' ? '展示・受賞・採択' : 'Exhibitions & Awards'}
                    </dt>
                    <dd className="text-foreground">
                      <ul className="space-y-1">
                        {project.exhibitions.map((ex, i) => (
                          <li key={i}>{ex[currentLanguage]}</li>
                        ))}
                      </ul>
                    </dd>
                  </>
                )}
                <dt className="text-eyebrow pt-1">
                  {currentLanguage === 'ja' ? '役割' : 'Role'}
                </dt>
                <dd className="text-foreground">{project.role[currentLanguage]}</dd>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
