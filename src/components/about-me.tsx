import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { TeamCarousel } from "./team-carousel";
import { mailtoUrl, siteConfig } from "@/lib/site-config";
import { teamMembers } from "@/lib/team";

const commitments = [
  "Acompañamiento estratégico continuo",
  "Talento comprometido con el objetivo",
  "Traducción de lo técnico a lo comercial",
] as const;

export function AboutMe() {
  const showTeam: boolean = siteConfig.features.teamCarousel;
  const heading = (
    <>
      <p className="eyebrow">La firma</p>
      <h2 id="firm-title" className="section-title mt-5">
        Tu socio estratégico en Datos e IA. Un equipo que se adapta a tu medida.
      </h2>
    </>
  );

  return (
    <section id="firm" aria-labelledby="firm-title" className="scroll-mt-20 border-y border-border bg-card section-space">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {showTeam ? <TeamCarousel members={teamMembers} /> : <div>{heading}</div>}

          <div>
            {showTeam && heading}
            <p className={`${showTeam ? "mt-7 " : ""}text-lg leading-relaxed text-muted-foreground`}>
              Terradata AI Solutions nace para acortar la brecha entre la complejidad tecnológica y las necesidades reales de tu negocio. Nos enfocamos en crear soluciones intuitivas, asumiendo el compromiso desde la primera idea hasta el despliegue.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Lideramos cada iniciativa articulando especialistas en datos, automatización y desarrollo integral. Traducimos tus desafíos en un plan de acción claro, con el equipo técnico adecuado para cada nivel de complejidad.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {commitments.map((commitment) => (
                <li key={commitment} className="border-l-2 border-primary pl-4 text-sm leading-relaxed">{commitment}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={mailtoUrl}><Mail aria-hidden="true" />Escribinos</a></Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />LinkedIn<ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}