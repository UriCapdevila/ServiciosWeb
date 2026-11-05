import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
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

const inputClassName =
  "mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring";

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

          <form
            id="formulario"
            name="contacto"
            method="POST"
            action="/gracias"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="border border-border bg-card p-6 md:p-9"
          >
            <input type="hidden" name="form-name" value="contacto" />
            <p className="hidden" aria-hidden="true">
              <label>No completar este campo <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Nombre y apellido
                <input className={inputClassName} name="nombre" type="text" autoComplete="name" required />
              </label>
              <label className="text-sm font-semibold">
                Correo de trabajo
                <input className={inputClassName} name="email" type="email" autoComplete="email" required />
              </label>
              <label className="text-sm font-semibold">
                Empresa u organización
                <input className={inputClassName} name="empresa" type="text" autoComplete="organization" />
              </label>
              <label className="text-sm font-semibold">
                Tipo de iniciativa
                <select className={inputClassName} name="servicio" defaultValue="" required>
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="automatizacion">Automatización de procesos</option>
                  <option value="datos-ia">Datos e inteligencia artificial</option>
                  <option value="software">Software a medida o MVP</option>
                  <option value="modernizacion">Modernización o nube</option>
                  <option value="diagnostico">Todavía necesito definirlo</option>
                </select>
              </label>
              <label className="text-sm font-semibold">
                Momento esperado para comenzar
                <select className={inputClassName} name="plazo" defaultValue="">
                  <option value="">Todavía no está definido</option>
                  <option value="inmediato">En el próximo mes</option>
                  <option value="trimestre">Durante el próximo trimestre</option>
                  <option value="exploracion">Estoy explorando alternativas</option>
                </select>
              </label>
              <label className="text-sm font-semibold">
                Inversión estimada
                <select className={inputClassName} name="inversion" defaultValue="">
                  <option value="">Todavía no está definida</option>
                  <option value="diagnostico">Busco comenzar con un diagnóstico</option>
                  <option value="piloto">Hay presupuesto para un piloto</option>
                  <option value="implementacion">Hay presupuesto para implementación</option>
                </select>
              </label>
            </div>

            <label className="mt-6 block text-sm font-semibold">
              ¿Qué problema necesitás resolver?
              <textarea
                className="mt-2 min-h-40 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring"
                name="desafio"
                placeholder="Contanos brevemente el proceso, la decisión o el sistema que hoy genera fricción."
                required
              />
            </label>

            <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input type="checkbox" name="consentimiento" value="acepto" className="mt-1 h-4 w-4 accent-primary" required />
              Acepto que Terradata AI Solutions utilice estos datos para responder esta consulta. No se usarán para envíos comerciales automatizados.
            </label>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground">No incluyas contraseñas, credenciales ni información confidencial en este formulario.</p>
              <Button type="submit" size="lg">Enviar consulta<ArrowUpRight aria-hidden="true" /></Button>
            </div>
          </form>
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
