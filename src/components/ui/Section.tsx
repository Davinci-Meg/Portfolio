'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';


interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    const revealRef = useReveal<HTMLElement>();

    return (
        <section
            ref={revealRef}
            id={id}
            className={`py-24 md:py-40 ${className}`}
        >
            <div className="container-page">
                {children}
            </div>
        </section>
    );
}
