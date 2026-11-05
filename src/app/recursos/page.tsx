import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calculator, Clock3 } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";

export const metadata: Metadata = {
  title: "Recursos para decidir proyectos de datos, IA y software",
  description:
    "Guías prácticas para evaluar automatizaciones, soluciones de datos, inteligencia artificial y software antes de comprometer una implementación.",
  alternates: { canonical: "/recursos" },
  openGraph: {
    title: "Recursos | Terradata AI Solutions",
    description: "Criterios prácticos para tomar mejores decisiones de tecnología antes de construir.",
    url: "/recursos",
  },
};

export default function ResourcesPage() {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <p className="eyebrow">Recursos</p>
          <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Criterios para decidir antes de construir.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Guías para transformar una necesidad amplia en un problema, un alcance y una inversión que puedan evaluarse con claridad.
          </p>
        </div>
      </section>

      <section aria-labelledby="guides-title" className="section-space">
        <div className="container px-4 md:px-6">
          <p className="eyebrow">Guías prácticas</p>
          <h2 id="guides-title" className="section-title mt-5">Empezá por la decisión que necesitás tomar.</h2>

          <div className="mt-12 max-w-4xl">
            <Link
              href="/recursos/cuanto-cuesta-automatizar-un-proceso"
              className="group block border border-border bg-card p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-10"
            >
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
                <Calculator aria-hidden="true" className="h-9 w-9 shrink-0 text-primary" />
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 aria-hidden="true" className="h-4 w-4" /> 10 minutos
                </span>
              </div>
              <h3 className="mt-10 max-w-3xl font-headline text-3xl font-semibold tracking-[-0.03em]">
                ¿Cuánto cuesta automatizar un proceso? Cómo definir el alcance antes de pedir presupuesto
              </h3>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                Una guía sin precios inventados: los factores que explican el costo, una matriz para elegir el primer tramo y las preguntas que debe responder una propuesta seria.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                Leer la guía <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
