import { ArrowUpRight, Blocks, Bot, ChartNoAxesCombined, CloudCog, Workflow } from "lucide-react";

const services = [
  { Icon: ChartNoAxesCombined, code: "01", name: "Data & Analytics", description: "Arquitecturas, modelos y tableros que convierten datos dispersos en una fuente confiable para decidir.", capabilities: ["Data pipelines", "BI & dashboards", "Gobierno de datos"] },
  { Icon: Bot, code: "02", name: "AI Solutions", description: "Casos de IA aplicados al negocio, desde asistentes y búsqueda inteligente hasta modelos predictivos.", capabilities: ["IA generativa", "Machine learning", "Prototipos aplicados"] },
  { Icon: Workflow, code: "03", name: "Automatización", description: "Rediseñamos procesos e integramos sistemas para reducir tareas manuales, demoras y errores operativos.", capabilities: ["Integraciones", "Workflows", "Agentes y APIs"] },
  { Icon: Blocks, code: "04", name: "Software a medida", description: "Productos y plataformas digitales construidos alrededor de tu operación, con bases listas para evolucionar.", capabilities: ["Aplicaciones web", "MVPs", "Sistemas internos"] },
  { Icon: CloudCog, code: "05", name: "Modernización & Cloud", description: "Actualizamos aplicaciones y arquitectura para ganar estabilidad, velocidad y capacidad de escala.", capabilities: ["Arquitectura", "Migración", "Optimización"] },
] as const;

export function FeaturedServices() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-foreground text-background section-space">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Capacidades</p>
            <h2 id="services-title" className="mt-5 max-w-3xl font-headline text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">Servicios conectados para resolver problemas completos.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-background/60">Entramos donde está el cuello de botella y conectamos estrategia, datos e implementación para llegar a un resultado utilizable.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-background/15 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, code, name, description, capabilities }) => (
            <article key={name} className="group min-h-[330px] border-b border-r border-background/15 p-7 transition-colors hover:bg-background/[0.04]">
              <div className="flex items-start justify-between">
                <span className="font-headline text-xs text-background/40">{code}</span>
                <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-background/30 transition-colors group-hover:text-primary" />
              </div>
              <Icon aria-hidden="true" className="mt-12 h-8 w-8 text-primary" />
              <h3 className="mt-6 font-headline text-2xl font-semibold">{name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-background/60">{description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {capabilities.map((capability) => <li key={capability} className="border border-background/15 px-2.5 py-1 text-[11px] text-background/65">{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}