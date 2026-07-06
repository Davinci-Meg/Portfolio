'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageToggle } from './LanguageToggle';

export function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navigationItems = [
    { key: 'awards', href: '#awards', label: t('navigation.awards') },
    { key: 'publications', href: '#publications', label: t('navigation.publications') },
    { key: 'skills', href: '#skills', label: t('navigation.skills') },
    { key: 'media', href: '#media', label: t('navigation.media') },
    { key: 'activities', href: '#activities', label: t('navigation.activities') },
    { key: 'projects', href: '#projects', label: t('navigation.projects') }
  ];

  useEffect(() => {
    const sectionIds = ['awards', 'publications', 'skills', 'media', 'activities', 'projects'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/85 backdrop-blur-md border-b border-rule z-50">
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between items-center h-14 md:h-16">
          <a
            href="#"
            className="text-sm md:text-base font-medium tracking-tight text-foreground"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Megumu Isshiki
          </a>

          <div className="flex items-center gap-6 md:gap-10">
            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                  className={`relative text-sm tracking-tight cursor-pointer transition-colors ${
                    activeSection === item.key
                      ? 'text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-accent'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {/* Mobile/Tablet menu button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden flex items-center justify-center p-2 -mr-2"
              aria-label="メニューを開く"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 17h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden pb-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className={`block py-3 text-base tracking-tight border-t border-rule cursor-pointer transition-colors ${
                activeSection === item.key
                  ? 'text-foreground'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="md:hidden flex items-center gap-3 pt-4 border-t border-rule mt-2">
            <span className="text-xs uppercase tracking-widest text-foreground-muted">Language</span>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}