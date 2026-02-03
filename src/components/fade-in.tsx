"use client";

import { useEffect, useRef, useState } from 'react';

interface FadeInChildrenProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInChildren({ children, className }: FadeInChildrenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'fade-in' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
