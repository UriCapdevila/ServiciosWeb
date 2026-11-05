import Link from "next/link";
import { ArrowUpRight, Bot, Hand, WalletCards } from "lucide-react";
import { publicSolutions, solutionPath } from "@/lib/solutions";

const icons = [Bot, WalletCards, Hand] as const;

export function SolutionPortfolio() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="scroll-mt-20 border-y border-border bg-card section-space">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Soluciones en evolución</p>
            <h2 id="solutions-title" className="section-title mt-5">Productos propios para problemas concretos.</h2>
          </div>
          <Link href="/soluciones" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Ver el portfolio completo<ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Distinguimos con claridad qué está listo para un piloto, qué continúa en desarrollo y qué funciona como demostración tecnológica.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {publicSolutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <Link key={solution.slug} href={solutionPath(solution)} className="group block border border-border bg-background p-7 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <article className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
                    <span className="border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">{solution.status}</span>
                  </div>
                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{solution.category}</p>
                  <h3 className="mt-3 font-headline text-2xl font-semibold tracking-[-0.025em]">{solution.publicName}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{solution.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Conocer la solución<ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
