'use client';

import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-3 gap-4',
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
}: {
  name: string;
  className: string;
  Icon: any;
  description: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      key={name}
      className={cn(
        'group/bento relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'dark:bg-black/[0.96] dark:[border:1px_solid_rgba(255,255,255,.1)]',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        style={{
          background: `
            radial-gradient(
              650px circle at var(--mouse-x) var(--mouse-y),
              hsla(180, 100%, 50%, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col gap-1 p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-neutral-800/80 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10">
          <Icon className="h-8 w-8 text-neutral-700 dark:text-white" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-white">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid };
