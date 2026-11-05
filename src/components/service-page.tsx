import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./ui/button";
import { MarketingPageShell } from "./marketing-page-shell";

type ServicePageProps = {
  service: ServiceDetail;
};

export function ServicePage({ service }: ServicePageProps) {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" /> Todos los servicios
          </Link>
          <p className="eyebrow mt-12">{service.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {service.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6">
              <Link href={`/contacto?servicio=${service.slug}`}>Conversar sobre este desafío<ArrowUpRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 bg-background/60 px-6">
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="fit-title" className="section-space">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Cuándo tiene sentido</p>
            <h2 id="fit-title" className="section-title mt-5">Señales de que vale la pena intervenir.</h2>
          </div>
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {service.fitFor.map((item) => (
              <li key={item} className="flex gap-3 bg-background p-6 text-sm leading-relaxed">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="deliverables-title" className="bg-foreground text-background section-space">
        <div className="container px-4 md:px-6">
          <p className="eyebrow text-primary">Entregables</p>
          <h2 id="deliverables-title" className="mt-5 max-w-4xl font-headline text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Una salida concreta, no una presentación que termina en diagnóstico.
          </h2>
          <ol className="mt-14 grid border-l border-t border-background/15 md:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <li key={item} className="min-h-44 border-b border-r border-background/15 p-7">
                <span className="font-headline text-xs text-background/40">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-8 max-w-lg font-headline text-xl font-semibold leading-snug">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="process-title" className="section-space">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Proceso</p>
              <h2 id="process-title" className="section-title mt-5">Decisiones visibles en cada etapa.</h2>
            </div>
            <ol className="border-t border-foreground/20">
              {service.process.map(({ title, description }, index) => (
                <li key={title} className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[56px_160px_1fr]">
                  <span className="font-headline text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-headline text-xl font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-title" className="border-y border-border bg-card section-space">
        <div className="container px-4 md:px-6">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="questions-title" className="section-title mt-5">Lo que conviene aclarar antes de empezar.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {service.questions.map(({ question, answer }) => (
              <article key={question} className="border border-border bg-background p-7">
                <h3 className="font-headline text-xl font-semibold leading-snug">{question}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
            <p className="max-w-2xl font-headline text-2xl font-semibold">¿Querés evaluar si este servicio encaja con tu situación?</p>
            <Button asChild size="lg"><Link href={`/contacto?servicio=${service.slug}`}>Solicitar diagnóstico<ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
