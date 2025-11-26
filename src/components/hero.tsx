import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Desarrollo Web <span className="text-primary">Inteligente</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          No solo escribo código; construyo soluciones. Fusiono desarrollo moderno con análisis de datos para crear plataformas que no solo se ven bien, sino que transforman información en decisiones estratégicas.
          </p>
          <div className="pt-6">
            <Button size="lg" className="font-bold shadow-lg shadow-primary/20" asChild>
              <a href="mailto:hola@urielcapdevila.com">
                <Mail className="mr-2 h-5 w-5" /> Hablemos de tu proyecto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
