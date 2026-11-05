import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

type MarketingPageShellProps = {
  children: ReactNode;
};

export function MarketingPageShell({ children }: MarketingPageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col text-foreground">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
