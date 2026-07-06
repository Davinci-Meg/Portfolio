'use client';

import { CSSProperties, useEffect, useRef } from 'react';

/** リスト行などのスタガー用: --reveal-delay をインラインstyleで渡す */
export function revealDelay(step: number): CSSProperties {
  return { '--reveal-delay': step } as CSSProperties;
}

/**
 * ルート要素配下の [data-reveal] 要素を IntersectionObserver で監視し、
 * ビューポートに入ったら data-reveal="visible" を付与する（one-shot）。
 * 見た目のトランジションは globals.css の [data-reveal] スタイルが担う。
 */
export function useReveal<T extends HTMLElement>() {
  const rootRef = useRef<T>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (targets.length === 0) return;

    const reveal = (el: HTMLElement) => el.setAttribute('data-reveal', 'visible');

    // reduced-motion時はアニメーションせず即時表示にする
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    for (const el of targets) {
      if (el.getAttribute('data-reveal') !== 'visible') {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return rootRef;
}
