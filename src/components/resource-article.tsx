import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { MarketingPageShell } from "./marketing-page-shell";
import { Button } from "./ui/button";
import { siteConfig } from "@/lib/site-config";

type TocItem = {
  id: string;
  label: string;
};

type ResourceArticleProps = {
  title: string;
  description: string;
  canonicalPath: string;
  publishedLabel: string;
  publishedIso: string;
  updatedLabel: string;
  updatedIso: string;
  readingTime: string;
  toc: readonly TocItem[];
  children: ReactNode;
};

export function ResourceArticle({
  title,
  description,
  canonicalPath,
  publishedLabel,
  publishedIso,
  updatedLabel,
  updatedIso,
  readingTime,
  toc,
  children,
}: ResourceArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    mainEntityOfPage: `${siteConfig.url}${canonicalPath}`,
    url: `${siteConfig.url}${canonicalPath}`,
    datePublished: publishedIso,
    dateModified: updatedIso,
    inLanguage: "es-AR",
    author: {
      "@type": "Person",
      name: "Uriel Capdevila",
      url: siteConfig.links.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/terradata-logo.svg`,
      },
    },
  } as const;

  return (
    <MarketingPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-border/70">
          <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
          <div className="container relative px-4 py-20 md:px-6 md:py-28">
            <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/recursos" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Recursos
              </Link>
            </nav>
            <p className="eyebrow mt-10">Guía de decisión</p>
            <h1 className="mt-6 max-w-5xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="h-4 w-4 text-primary" />
                Publicado {publishedLabel}; actualizado {updatedLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-primary" />
                {readingTime}
              </span>
            </div>
            <p className="mt-5 text-sm">
              Por{" "}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Uriel Capdevila
              </a>
              , fundador y director de {siteConfig.shortName}.
            </p>
          </div>
        </header>

        <div className="container grid gap-12 px-4 py-16 md:px-6 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-center lg:gap-20 lg:py-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-headline text-sm font-semibold uppercase tracking-[0.16em] text-foreground">En esta guía</p>
            <nav aria-label="Tabla de contenidos" className="mt-5">
              <ol className="space-y-3 border-l border-border pl-5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a className="text-sm leading-snug text-muted-foreground hover:text-primary" href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-16">{children}</div>
        </div>

        <footer className="border-y border-border bg-card py-16">
          <div className="container flex flex-col justify-between gap-8 px-4 md:flex-row md:items-center md:px-6">
            <div>
              <p className="eyebrow">Próximo paso</p>
              <h2 className="mt-4 max-w-2xl font-headline text-3xl font-semibold tracking-[-0.03em]">
                Convertí el proceso en un alcance que se pueda evaluar.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Un diagnóstico breve permite decidir qué automatizar, qué dejar fuera y cómo validar el resultado antes de comprometer la implementación completa.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contacto?servicio=automatizacion-procesos">
                Solicitar diagnóstico <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </footer>
      </article>
    </MarketingPageShell>
  );
}
