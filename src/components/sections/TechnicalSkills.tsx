'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { skillsData } from '@/lib/data/skills';
import { Section } from '@/components/ui/Section';

export function TechnicalSkills() {
  const { t } = useTranslation();
  const categories = ['programming', 'prototyping', 'fabrication'];

  return (
    <Section id="skills">
      <p className="text-eyebrow mb-8">04 / Skills</p>
      <h2 className="text-section-title mb-20 md:mb-32">{t('sections.skills')}</h2>

      <div className="border-t border-rule">
        {categories.map((category) => {
          const skillsInCategory = skillsData.filter(skill => skill.category === category);

          return (
            <div
              key={category}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b border-rule"
            >
              <h3 className="col-span-12 md:col-span-3 text-base md:text-lg font-medium capitalize tracking-tight">
                {t(`skills.${category}`)}
              </h3>
              <p className="col-span-12 md:col-span-9 text-base md:text-xl leading-relaxed text-foreground/85">
                {skillsInCategory.map(s => s.name).join('  /  ')}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}