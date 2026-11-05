import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto y diagnóstico inicial",
  description: "Contanos el desafío de datos, automatización, inteligencia artificial o software que necesitás resolver y coordinemos un diagnóstico inicial.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Terradata AI Solutions",
    description: "Compartí el contexto de tu iniciativa y coordinemos el próximo paso.",
    url: "/contacto",
  },
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-6 max-w-4xl font-headline text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Contanos qué necesitás resolver, no qué tecnología querés comprar.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Con un poco de contexto podemos identificar si conviene avanzar con un diagnóstico, un piloto o una conversación más específica.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Canales directos</p>
            <h2 className="mt-5 font-headline text-3xl font-semibold tracking-[-0.03em]">Elegí la vía que te resulte más cómoda.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              El formulario ayuda a llegar a la primera conversación con contexto. Si preferís un contacto breve, también podés escribir por WhatsApp o correo.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Abrir WhatsApp<ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <Mail aria-hidden="true" className="h-4 w-4" />{siteConfig.email}
              </a>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-border bg-card py-12">
        <div className="container flex flex-col justify-between gap-5 px-4 md:flex-row md:items-center md:px-6">
          <p className="font-headline text-xl font-semibold">¿Querés entender primero las opciones?</p>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Explorar servicios<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </MarketingPageShell>
  );
}
