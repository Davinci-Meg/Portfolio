'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { profileData } from '@/lib/data/profile';
import { getImagePath } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const HERO_IMAGES = [
    '/images/hero/hero-slide-1.webp',
    '/images/hero/hero-slide-2.webp',
    '/images/hero/hero-slide-3.webp',
    '/images/hero/hero-slide-4.webp',
    '/images/hero/hero-slide-5.webp'
];

export function Hero() {
    const { currentLanguage } = useTranslation();
    const interestTags = ['Human Computer Interaction', 'More-Than-Human Design', 'Art & Technology'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen relative flex flex-col px-6 md:px-12 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0 bg-black">
                {HERO_IMAGES.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={getImagePath(src)}
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/45" />
                    </div>
                ))}
            </div>

            {/* Top eyebrow */}
            <div className="relative z-10 flex justify-between items-start text-eyebrow text-white/80">
                <span>Portfolio — 2026</span>
                <span className="hidden md:inline">Hokkaido, JP</span>
            </div>

            {/* Title block */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-screen-2xl w-full mx-auto">
                <h1 className="text-huge text-white break-words mb-8 md:mb-10">
                    {profileData.name[currentLanguage]}
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light tracking-tight max-w-3xl">
                    {interestTags.join(' / ')}
                </p>
            </div>

            {/* Bottom row: socials + scroll cue */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 text-white">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-eyebrow md:text-sm text-white">
                    <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">GitHub</a>
                    <a href={profileData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">Facebook</a>
                    <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">Instagram</a>
                    <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition-colors">YouTube</a>
                </div>
                <div className="flex items-center gap-3 text-eyebrow text-white/80">
                    <span>Scroll</span>
                    <ArrowDown className="w-4 h-4" />
                </div>
            </div>
        </section>
    );
}
