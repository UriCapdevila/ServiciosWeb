"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { TeamMember } from "@/lib/team";
import { Button } from "./ui/button";

type TeamCarouselProps = {
  members: readonly TeamMember[];
};

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const member = members[activeIndex];

  if (!member) return null;

  const showControls = members.length > 1;
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + members.length) % members.length);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % members.length);

  return (
    <div
      className="relative mx-auto w-full max-w-md"
      aria-roledescription="carrusel"
      aria-label="Integrantes de Terradata AI Solutions"
    >
      <div className="absolute -bottom-4 -right-4 h-full w-full border border-primary/25 bg-primary/5" />
      <div className="relative overflow-hidden" aria-live="polite">
        <Image
          key={member.imageSrc}
          src={member.imageSrc}
          alt={member.imageAlt}
          width={640}
          height={720}
          className="aspect-[4/5] w-full border border-foreground/10 object-cover object-top grayscale-[20%]"
        />
        <div className="absolute bottom-5 left-5 right-5 bg-foreground p-5 text-background">
          <p className="font-headline text-lg font-semibold">{member.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-background/55">
            {member.role}
          </p>
        </div>
      </div>

      {showControls && (
        <div className="relative mt-7 flex items-center justify-between">
          <p className="font-headline text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(members.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="icon" onClick={showPrevious} aria-label="Ver integrante anterior">
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button type="button" variant="outline" size="icon" onClick={showNext} aria-label="Ver integrante siguiente">
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}