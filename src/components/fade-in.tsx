"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInChildrenProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInChildren({ children, className }: FadeInChildrenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(isVisible ? 'fade-in' : 'opacity-0', className)}
    >
      {children}
    </div>
  );
}
