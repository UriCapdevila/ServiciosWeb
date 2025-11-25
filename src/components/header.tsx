import Link from 'next/link';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="hidden font-bold font-headline sm:inline-block">Uriel Capdevila</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="font-bold shadow-sm shadow-primary/20">
            <a href="mailto:hola@webdataforge.com">
              <Mail className="mr-2 h-4 w-4" /> Hablemos
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
