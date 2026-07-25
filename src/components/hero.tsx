import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { mailtoUrl } from "@/lib/site-config";

const deliverySteps = [
  ["01", "Diagnóstico", "Contexto, prioridades y oportunidad real."],
  ["02", "Roadmap", "Decisiones, alcance y plan de ejecución."],
  ["03", "Implementación", "Un equipo especialista construye la solución."],
  ["04", "Evolución", "Medimos, transferimos conocimiento y escalamos."],
] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-border/70">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
      <div className="container relative grid min-h-[700px] gap-14 px-4 py-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Consultoría de tecnología, datos e IA</p>
          <h1 id="hero-title" className="mt-6 max-w-4xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Convertimos complejidad tecnológica en{" "}
            <span className="text-primary">decisiones y sistemas que hacen avanzar tu negocio.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Diseñamos e implementamos soluciones de datos, inteligencia artificial y software que se integran a tu organización. Lo hacemos con un equipo especializado, enfocado en generar impacto real en tu negocio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6">
              <a href={mailtoUrl}>Agendá una conversación <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-foreground/20 bg-background/60 px-6">
              <Link href="#services">Explorar servicios <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border/80 pt-6 text-sm text-muted-foreground">
            {["Contacto directo con nosotros", "Un equipo comprometido con cada desafío", "Estrategia y ejecución"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 text-primary" />{item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -left-5 -top-5 h-full w-full border border-primary/20 bg-primary/5" />
          <div className="relative border border-foreground/15 bg-foreground p-6 text-background shadow-2xl shadow-foreground/10 md:p-8">
            <div className="flex items-start justify-between gap-6 border-b border-background/15 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/55">Modelo de trabajo</p>
                <h2 className="mt-2 font-headline text-2xl font-semibold">De desafío a capacidad instalada</h2>
              </div>
              <span className="mt-1 h-3 w-3 shrink-0 bg-primary" />
            </div>
            <ol className="divide-y divide-background/15">
              {deliverySteps.map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[42px_1fr] gap-3 py-5">
                  <span className="font-headline text-sm text-primary">{number}</span>
                  <div>
                    <h3 className="font-headline text-base font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-background/60">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}