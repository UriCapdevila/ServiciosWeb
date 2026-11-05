import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 border-b border-background/15 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <div><p className="font-headline text-lg font-semibold">Terradata</p><p className="text-[9px] uppercase tracking-[0.2em] text-background/45">AI Solutions</p></div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/65">Consultoría de datos, automatización, desarrollo e IA. Diseñamos e implementamos soluciones conectadas con tu operación.</p>
          </div>
          <Link href="/contacto" className="group flex items-center gap-3 font-headline text-xl font-semibold underline decoration-primary decoration-2 underline-offset-8">Solicitá un diagnóstico<ArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Buenos Aires, Argentina.</p>
          <nav aria-label="Navegación del pie" className="flex flex-wrap gap-5">
            <Link href="/#services" className="hover:text-background">Servicios</Link>
            <Link href="/#approach" className="hover:text-background">Cómo trabajamos</Link>
            <Link href="/casos" className="hover:text-background">Casos</Link>
            <Link href="/recursos" className="hover:text-background">Recursos</Link>
            <Link href="/contacto" className="hover:text-background">Contacto</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
