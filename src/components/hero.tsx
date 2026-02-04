'use client';

import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { HeroBackground } from "./hero-background";
import { AnimatedWord } from "./animated-word";

export function Hero() {
  const handleContactClick = () => {
    window.location.href = "mailto:Uri_CapdevilaWRK@outlook.com";
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Desarrollo Web <span className="text-primary"><AnimatedWord /></span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          No solo escribo código; construyo soluciones. Fusiono desarrollo moderno con análisis de datos para crear plataformas que no solo se ven bien, sino que transforman información en decisiones estratégicas.
          </p>
          <div className="pt-6">
            <Button size="lg" className="font-bold shadow-lg shadow-primary/20" onClick={handleContactClick}>
              <Mail className="mr-2 h-5 w-5" /> Hablemos de tu proyecto
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
