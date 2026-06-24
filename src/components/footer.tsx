import { Button } from './ui/button';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './logo';
import { mailtoUrl, siteConfig } from '@/lib/site-config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border/40 bg-background z-10">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="h-11 w-11" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-11 w-11" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="h-11 sm:h-9" asChild>
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
            </a>
          </Button>
          <Button size="sm" className="h-11 sm:h-9" asChild>
            <a href={mailtoUrl}>
              <Mail className="h-4 w-4 mr-2" /> Email
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
