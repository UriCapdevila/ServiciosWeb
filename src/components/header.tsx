import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { mailtoUrl } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center px-4 md:px-6">
        <Link
          href="/"
          aria-label="Terradata AI Solutions, inicio"
          className="flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-headline text-base font-bold tracking-tight sm:text-lg">
              Terradata
            </span>
            <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
              AI Solutions
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="ml-auto hidden items-center gap-7 lg:flex"
        >
          <Link className="nav-link" href="#services">Servicios</Link>
          <Link className="nav-link" href="#approach">Cómo trabajamos</Link>
          <Link className="nav-link" href="#firm">La firma</Link>
        </nav>

        <Button asChild className="ml-auto h-11 px-4 lg:ml-7">
          <a href={mailtoUrl}>
            <span className="hidden sm:inline">Conversemos</span>
            <span className="sm:hidden">Contacto</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}