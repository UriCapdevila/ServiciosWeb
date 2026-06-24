import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { HeroBackground } from "./hero-background";
import { AnimatedWord } from "./animated-word";
import { mailtoUrl } from '@/lib/site-config';

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[calc(100svh-4rem)] w-full items-center justify-center overflow-hidden text-center">
      <HeroBackground />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <p className="font-headline text-sm font-medium uppercase tracking-[0.22em] text-primary/80">
            Desarrollo · Datos · Estrategia
          </p>
          <h1 id="hero-title" className="bg-gradient-to-r from-white to-gray-500 bg-clip-text font-headline text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl/none">
            Desarrollo Web{' '}
            <span className="sr-only">inteligente, estratégico y analítico</span>
            <span className="text-primary"><AnimatedWord /></span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          No solo escribo código; construyo soluciones. Fusiono desarrollo moderno con análisis de datos para crear plataformas que no solo se ven bien, sino que transforman información en decisiones estratégicas.
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/20">
              <a href={mailtoUrl}>
                <Mail className="mr-2 h-5 w-5" /> Hablemos de tu proyecto
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
