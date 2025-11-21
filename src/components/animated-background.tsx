"use client";

import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      <div
        className={cn(
          "absolute -bottom-1/4 left-0 h-[50rem] w-[50rem] rounded-full",
          "bg-gradient-radial from-primary/10 to-transparent",
          "animate-pulse-slow"
        )}
      />
      <div
        className={cn(
          "absolute -top-1/4 right-0 h-[50rem] w-[50rem] rounded-full",
          "bg-gradient-radial from-accent/10 to-transparent",
          "animate-pulse-slow animation-delay-2000"
        )}
      />
       <div
        className={cn(
          "absolute -bottom-1/2 right-1/4 h-[30rem] w-[30rem] rounded-full",
          "bg-gradient-radial from-primary/5 to-transparent",
          "animate-pulse-slow animation-delay-4000"
        )}
      />
    </div>
  );
}
