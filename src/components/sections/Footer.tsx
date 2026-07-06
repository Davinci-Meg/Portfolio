'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background pt-16 md:pt-24 pb-12 px-6 md:px-12 border-t border-rule">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.18em] uppercase text-foreground-muted">
            <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">GitHub</a>
            <a href={profileData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">Facebook</a>
            <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">Instagram</a>
            <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">YouTube</a>
          </div>
          <div className="text-xs font-mono text-foreground-muted">
            © {new Date().getFullYear()} Megumu Isshiki. {t('copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}