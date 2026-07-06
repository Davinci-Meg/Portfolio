'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Section } from '@/components/ui/Section';
import { getImagePath } from '@/lib/utils';
import { profileData } from '@/lib/data/profile';
import { revealDelay } from '@/hooks/useReveal';

export function Profile() {
    const { currentLanguage } = useTranslation();

    return (
        <Section id="profile">
            <p className="text-eyebrow mb-6" data-reveal="">01 / Profile</p>
            <h2 className="text-section-title mb-14 md:mb-24" data-reveal="" style={revealDelay(1)}>About</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 md:items-start">
                <div className="md:col-span-7 order-2 md:order-1" data-reveal="" style={revealDelay(1)}>
                    <p className="whitespace-pre-line leading-relaxed text-base md:text-lg text-foreground/80">
                        {profileData.description[currentLanguage]}
                    </p>
                </div>

                <div className="md:col-span-5 order-1 md:order-2" data-reveal="">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src={getImagePath('/images/profile/profile-rectangle-v2.webp')}
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
