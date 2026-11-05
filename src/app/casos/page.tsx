import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Github, ShieldCheck } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Casos y trabajo verificable",
  description: "Casos, proyectos propios y criterios de documentación de Terradata AI Solutions. Contexto y entregables sin testimonios ni métricas inventadas.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos y trabajo verificable | Terradata AI Solutions",
    description: "Experiencia pública, proyectos propios y criterios claros para documentar resultados.",
    url: "/casos",
  },
};

const documentationCriteria = [
  "Contexto y situación de partida",
  "Alcance y restricciones reales",
  "Decisiones y entregables producidos",
  "Resultado autorizado o aprendizaje verificable",
] as const;

export default function CasesPage() {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <p className="eyebrow">Casos y evidencia</p>
          <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Trabajo que se puede explicar, revisar y sostener.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            No publicamos nombres, cifras o testimonios sin autorización. Esta sección distingue proyectos propios, experiencia técnica pública y casos de clientes documentados.
          </p>
        </div>
      </section>

      <section aria-labelledby="own-project-title" className="section-space">
        <div className="container px-4 md:px-6">
          <p className="eyebrow">Proyecto propio y verificable</p>
          <div className="mt-7 grid overflow-hidden border border-border bg-card lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-72 overflow-hidden border-b border-border bg-foreground lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <Image src="/og.png" alt="Vista de Terradata AI Solutions, proyecto web propio" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-left" priority />
            </div>
            <div className="p-7 md:p-10">
              <span className="inline-flex border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Proyecto propio</span>
              <h2 id="own-project-title" className="mt-7 font-headline text-3xl font-semibold tracking-[-0.03em]">Terradata AI Solutions</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Sitio de consultoría construido con Next.js, React, TypeScript y Tailwind CSS. El repositorio público permite revisar la evolución del producto, su arquitectura y las decisiones implementadas.
              </p>
              <dl className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div><dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Objetivo</dt><dd className="mt-2 text-sm font-semibold">Presentar servicios y convertir consultas calificadas</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Alcance</dt><dd className="mt-2 text-sm font-semibold">Estrategia, contenido, experiencia y desarrollo</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Plataforma</dt><dd className="mt-2 text-sm font-semibold">Next.js desplegado en Netlify</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Estado</dt><dd className="mt-2 text-sm font-semibold">Producto en evolución continua</dd></div>
              </dl>
              <Button asChild size="lg" variant="outline" className="mt-9">
                <a href={siteConfig.links.repository} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />Revisar repositorio<ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="criteria-title" className="bg-foreground text-background section-space">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <ShieldCheck aria-hidden="true" className="h-9 w-9 text-primary" />
            <p className="eyebrow mt-7 text-primary">Criterio editorial</p>
            <h2 id="criteria-title" className="mt-5 font-headline text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Qué debe tener un caso antes de publicarse.</h2>
            <p className="mt-6 text-base leading-relaxed text-background/60">Los casos de clientes se incorporan cuando existe evidencia suficiente y autorización para compartirla.</p>
          </div>
          <ul className="grid gap-px border border-background/15 bg-background/15 sm:grid-cols-2">
            {documentationCriteria.map((criterion) => (
              <li key={criterion} className="flex min-h-36 gap-3 bg-foreground p-7 text-sm leading-relaxed">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{criterion}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container flex flex-col justify-between gap-7 px-4 md:flex-row md:items-center md:px-6">
          <div>
            <p className="eyebrow">Tu desafío puede ser el próximo</p>
            <h2 className="mt-5 max-w-2xl font-headline text-3xl font-semibold tracking-[-0.03em]">Empecemos por definir una salida concreta y verificable.</h2>
          </div>
          <Button asChild size="lg"><Link href="/contacto">Solicitar diagnóstico<ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </MarketingPageShell>
  );
}
