import Link from 'next/link';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { Logo } from './logo';
import { mailtoUrl } from '@/lib/site-config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="-ml-1 mr-6 flex min-h-11 min-w-11 items-center space-x-2 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
          <span className="hidden font-bold font-headline sm:inline-block">Uriel Capdevila</span>
        </Link>
        <nav aria-label="Navegación principal" className="ml-auto hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Servicios
          </Link>
          <Link href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Proyectos
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Sobre mí
          </Link>
        </nav>
        <div className="ml-4 flex items-center justify-end">
          <Button asChild className="h-11 font-bold shadow-sm shadow-primary/20 md:h-10">
            <a href={mailtoUrl}>
              <Mail className="mr-2 h-4 w-4" /> Hablemos
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
