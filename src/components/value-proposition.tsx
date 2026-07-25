import { BriefcaseBusiness, Network, ScanSearch } from "lucide-react";

const principles = [
  { Icon: BriefcaseBusiness, title: "Visión de negocio primero", description: "La tecnología es el medio. Empezamos por la decisión, el proceso o el resultado que necesitás mejorar." },
  { Icon: Network, title: "Especialistas para cada desafío", description: "Armamos un equipo compacto con las capacidades necesarias, sin trasladarte una estructura sobredimensionada." },
  { Icon: ScanSearch, title: "Claridad de punta a punta", description: "Alcance, prioridades y próximos pasos visibles. Trabajamos cerca de tu equipo y sin cajas negras." },
] as const;

export function ValueProposition() {
  return (
    <section aria-labelledby="value-title" className="section-space">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">Por qué Terradata</p>
            <h2 id="value-title" className="section-title mt-5">La profundidad de un especialista. La cercanía de un socio.</h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {principles.map(({ Icon, title, description }, index) => (
              <article key={title} className="bg-background p-7">
                <span className="font-headline text-xs text-muted-foreground">0{index + 1}</span>
                <Icon aria-hidden="true" className="mt-8 h-7 w-7 text-primary" />
                <h3 className="mt-5 font-headline text-xl font-semibold leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}