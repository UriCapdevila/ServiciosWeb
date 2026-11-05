import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Hand, WalletCards } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { Button } from "@/components/ui/button";
import { publicSolutions, solutionPath } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Soluciones digitales en desarrollo",
  description: "Portfolio de asistentes con IA, organización financiera e interfaces gestuales disponibles para pilotos y validaciones con alcance claro.",
  alternates: { canonical: "/soluciones" },
  openGraph: {
    title: "Soluciones digitales en desarrollo | Terradata AI Solutions",
    description: "Productos propios para validar conocimiento asistido, organización financiera e interacción gestual.",
    url: "/soluciones",
  },
};

const icons = [Bot, WalletCards, Hand] as const;

export default function SolutionsPage() {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <p className="eyebrow">Portfolio de soluciones</p>
          <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Tecnología propia para validar oportunidades reales.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Desarrollamos soluciones reutilizables y las adaptamos al contexto de cada organización. Su estado se publica de forma explícita para diferenciar un piloto disponible de un prototipo o caso tecnológico.
          </p>
        </div>
      </section>

      <section aria-labelledby="portfolio-title" className="section-space">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">Tres líneas de producto</p>
              <h2 id="portfolio-title" className="section-title mt-5">Empezar pequeño, aprender rápido y decidir con evidencia.</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">Cada propuesta comienza con un caso acotado, fuentes o datos controlados y criterios de validación acordados.</p>
            </div>
            <div className="grid gap-5">
              {publicSolutions.map((solution, index) => {
                const Icon = icons[index];
                return (
                  <Link key={solution.slug} href={solutionPath(solution)} className="group border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-9">
                    <article className="grid gap-7 md:grid-cols-[56px_1fr_auto] md:items-start">
                      <Icon aria-hidden="true" className="h-8 w-8 text-primary" />
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-headline text-2xl font-semibold">{solution.publicName}</h3>
                          <span className="border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">{solution.status}</span>
                        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{solution.summary}</p>
                      </div>
                      <ArrowUpRight aria-hidden="true" className="hidden h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background section-space">
        <div className="container flex flex-col justify-between gap-8 px-4 md:flex-row md:items-end md:px-6">
          <div>
            <p className="eyebrow text-primary">Aplicación a medida</p>
            <h2 className="mt-5 max-w-3xl font-headline text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">La tecnología es el punto de partida; el piloto se diseña alrededor de tu operación.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/60">Revisamos el problema, los datos disponibles, los riesgos y el criterio de éxito antes de proponer una implementación.</p>
          </div>
          <Button asChild size="lg" variant="secondary"><Link href="/contacto?modalidad=piloto">Proponer un caso<ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </MarketingPageShell>
  );
}
