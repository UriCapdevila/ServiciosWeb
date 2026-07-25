import { Check, MoveRight } from "lucide-react";

const steps = [
  { number: "01", title: "Entender", description: "Alineamos el problema, las restricciones y el impacto esperado con quienes toman la decisión." },
  { number: "02", title: "Priorizar", description: "Definimos una hoja de ruta realista, con alcance, riesgos y criterios de éxito explícitos." },
  { number: "03", title: "Construir", description: "El equipo especialista implementa en ciclos cortos y comparte avances verificables." },
  { number: "04", title: "Transferir y escalar", description: "Dejamos capacidad instalada, documentación y un siguiente paso claro para evolucionar." },
] as const;

const models = [
  { title: "Sprint de diagnóstico", description: "Para ordenar un desafío y salir con decisiones accionables.", items: ["Mapa de situación", "Oportunidades priorizadas", "Roadmap recomendado"] },
  { title: "Proyecto end-to-end", description: "Para diseñar e implementar una solución con un único equipo.", items: ["Liderazgo técnico", "Implementación iterativa", "Puesta en producción"] },
  { title: "Equipo asociado", description: "Para sumar capacidades especialistas a una iniciativa en marcha.", items: ["Perfiles según necesidad", "Integración con tu equipo", "Objetivos compartidos"] },
] as const;

export function ProjectShowcase() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-20 section-space">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 id="approach-title" className="section-title mt-5">Menos ceremonia. Más claridad y avance visible.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">Cada iniciativa tiene un responsable senior y un equipo ajustado al desafío. Vos sabés qué estamos resolviendo, qué decidimos y qué sigue.</p>
          </div>
          <ol className="border-t border-foreground/20">
            {steps.map(({ number, title, description }) => (
              <li key={number} className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[56px_180px_1fr] sm:items-start">
                <span className="font-headline text-sm text-primary">{number}</span>
                <h3 className="font-headline text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-20">
          <div className="flex items-center gap-4"><h3 className="font-headline text-xl font-semibold">Formas de colaborar</h3><div className="h-px flex-1 bg-border" /></div>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {models.map(({ title, description, items }) => (
              <article key={title} className="border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                <MoveRight aria-hidden="true" className="h-6 w-6 text-primary" />
                <h4 className="mt-8 font-headline text-2xl font-semibold">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-7 space-y-3 border-t border-border pt-5">
                  {items.map((item) => <li key={item} className="flex items-center gap-2 text-sm"><Check aria-hidden="true" className="h-4 w-4 text-primary" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}