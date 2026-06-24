'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

export type BentoGridProps = React.HTMLAttributes<HTMLDivElement>;

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    />
  );
});
BentoGrid.displayName = 'BentoGrid';

const bentoCardVariants = cva(
  'relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-xl group',
  {
    variants: {
      variant: {
        default:
          'transform-gpu bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      },
      size: {
        default: 'md:col-span-1',
        wide: 'md:col-span-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BentoCardProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bentoCardVariants> {
  background?: React.ReactNode;
}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      className,
      children,
      variant,
      size,
      background,
      onPointerMove,
      onPointerLeave,
      ...props
    },
    ref,
  ) => {
    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerMove?.(event);
      if (event.defaultPrevented || event.pointerType === 'touch') return;

      const { left, top } = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - left}px`);
      event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - top}px`);
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerLeave?.(event);
      event.currentTarget.style.removeProperty('--pointer-x');
      event.currentTarget.style.removeProperty('--pointer-y');
    };

    return (
      <div
        ref={ref}
        {...props}
        className={cn(bentoCardVariants({ variant, size, className }))}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(400px circle at var(--pointer-x, 85%) var(--pointer-y, 15%), hsl(var(--primary) / 0.15), transparent 80%)',
          }}
        >
          {background}
        </div>
        <div className="relative z-20">{children}</div>
      </div>
    );
  }
);

BentoCard.displayName = 'BentoCard';

const BentoCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'flex h-full flex-col justify-between p-6',
          className
        )}
      />
    );
  }
);
BentoCardContent.displayName = 'BentoCardContent';

const BentoCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} {...props} className={cn('space-y-1', className)} />;
  }
);
BentoCardHeader.displayName = 'BentoCardHeader';

const BentoCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn('text-xl font-semibold text-foreground', className)}
      />
    );
  }
);
BentoCardTitle.displayName = 'BentoCardTitle';

const BentoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn('max-w-lg text-sm text-muted-foreground', className)}
    />
  );
});
BentoCardDescription.displayName = 'BentoCardDescription';

const BentoCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'mt-6 flex items-center justify-start text-sm text-muted-foreground',
          className
        )}
      />
    );
  }
);
BentoCardFooter.displayName = 'BentoCardFooter';

export {
  BentoGrid,
  BentoCard,
  BentoCardContent,
  BentoCardHeader,
  BentoCardTitle,
  BentoCardDescription,
  BentoCardFooter,
};
