import Link from "next/link";
import { ArrowUpRight, FileCheck2, Github, UserRoundCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const evidence = [
  {
    Icon: UserRoundCheck,
    title: "Dirección visible",
    description:
      "Uriel Capdevila lidera el diagnóstico y la dirección técnica. Sabés quién toma las decisiones y responde por el trabajo.",
    href: "/#firm",
    label: "Conocer la firma",
    external: false,
  },
  {
    Icon: Github,
    title: "Trabajo técnico público",
    description:
      "El perfil de GitHub permite revisar proyectos, tecnologías y forma de construir sin depender solamente de una presentación comercial.",
    href: siteConfig.links.github,
    label: "Revisar GitHub",
    external: true,
  },
  {
    Icon: FileCheck2,
    title: "Casos con contexto",
    description:
      "Publicamos únicamente experiencias que podemos documentar. Sin logos, testimonios ni métricas inventadas para completar una grilla.",
    href: "/casos",
    label: "Ver casos y criterios",
    external: false,
  },
] as const;

export function ExperienceProof() {
  return (
    <section aria-labelledby="evidence-title" className="border-y border-border bg-card section-space">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Confianza verificable</p>
            <h2 id="evidence-title" className="section-title mt-5">
              Evidencia antes que promesas.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Para evaluar una consultoría necesitás saber quién lidera, cómo trabaja y qué puede demostrar. Por eso separamos con claridad experiencia pública, proceso y resultados autorizados.
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {evidence.map(({ Icon, title, description, href, label, external }) => {
              const content = (
                <>
                  <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
                  <h3 className="mt-8 font-headline text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {label}<ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </>
              );

              return external ? (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="bg-background p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
                  {content}
                </a>
              ) : (
                <Link key={title} href={href} className="bg-background p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
