import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Consulta recibida",
  description: "Confirmación de recepción de una consulta enviada a Terradata AI Solutions.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/gracias" },
};

export default function ThankYouPage() {
  return (
    <MarketingPageShell>
      <section className="section-space">
        <div className="container px-4 text-center md:px-6">
          <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-primary" />
          <p className="eyebrow mt-8">Consulta recibida</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-headline text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Gracias por compartir el contexto.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">La información enviada permite preparar una primera conversación más útil y enfocada.</p>
          <Button asChild size="lg" className="mt-9"><Link href="/">Volver al inicio<ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </MarketingPageShell>
  );
}
