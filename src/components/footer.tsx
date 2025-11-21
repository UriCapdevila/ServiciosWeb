"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-8 border-t border-border/40 bg-background z-10">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {year} Web Data Forge. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="mailto:hola@webdataforge.com">
              <Mail className="h-4 w-4 mr-2" /> Email
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
