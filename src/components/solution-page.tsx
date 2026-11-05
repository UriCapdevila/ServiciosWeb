import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, CircleAlert } from "lucide-react";
import type { SolutionDetail } from "@/lib/solutions";
import { Button } from "./ui/button";
import { MarketingPageShell } from "./marketing-page-shell";

type SolutionPageProps = {
  solution: SolutionDetail;
};

export function SolutionPage({ solution }: SolutionPageProps) {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <Link href="/soluciones" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Todas las soluciones
          </Link>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <p className="eyebrow">{solution.category}</p>
            <span className="border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {solution.status}
            </span>
          </div>
          <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {solution.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {solution.description}
          </p>
          <Button asChild size="lg" className="mt-9 h-12 px-6">
            <Link href={`/contacto?solucion=${solution.slug}`}>{solution.cta}<ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="fit-title" className="section-space">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Dónde puede aportar</p>
            <h2 id="fit-title" className="section-title mt-5">Situaciones que vale la pena explorar.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">{solution.summary}</p>
          </div>
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {solution.fitFor.map((item) => (
              <li key={item} className="flex gap-3 bg-background p-6 text-sm leading-relaxed">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="capabilities-title" className="bg-foreground text-background section-space">
        <div className="container px-4 md:px-6">
          <p className="eyebrow text-primary">Capacidades demostradas</p>
          <h2 id="capabilities-title" className="mt-5 max-w-4xl font-headline text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Una base funcional para validar el caso correcto.
          </h2>
          <ol className="mt-14 grid border-l border-t border-background/15 md:grid-cols-2">
            {solution.capabilities.map((item, index) => (
              <li key={item} className="min-h-44 border-b border-r border-background/15 p-7">
                <span className="font-headline text-xs text-background/40">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-8 max-w-lg font-headline text-xl font-semibold leading-snug">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="pilot-title" className="section-space">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Camino de validación</p>
            <h2 id="pilot-title" className="section-title mt-5">Un piloto acotado antes de escalar.</h2>
          </div>
          <ol className="border-t border-foreground/20">
            {solution.pilotScope.map((item, index) => (
              <li key={item} className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[56px_1fr]">
                <span className="font-headline text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-headline text-xl font-semibold leading-snug">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="boundaries-title" className="border-y border-border bg-card section-space">
        <div className="container px-4 md:px-6">
          <div className="flex max-w-3xl items-start gap-4">
            <CircleAlert aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-primary" />
            <div>
              <p className="eyebrow">Alcance y límites</p>
              <h2 id="boundaries-title" className="mt-5 font-headline text-3xl font-semibold tracking-[-0.03em]">Lo que conviene saber antes de evaluar esta solución.</h2>
            </div>
          </div>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {solution.boundaries.map((item) => (
              <li key={item} className="border border-border bg-background p-7 text-sm leading-relaxed text-muted-foreground">{item}</li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
            <p className="max-w-2xl font-headline text-2xl font-semibold">¿Querés explorar una aplicación concreta en tu organización?</p>
            <Button asChild size="lg"><Link href={`/contacto?solucion=${solution.slug}`}>{solution.cta}<ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
