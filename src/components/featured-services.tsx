import { AppWindow, BarChart, Bot, Rocket } from 'lucide-react';

const services = [
  {
    Icon: Rocket,
    name: 'Landing Pages Estratégicas',
    description: 'Diseño y desarrollo landings de alto impacto que convierten visitantes en clientes, optimizadas para SEO y velocidad.',
  },
  {
    Icon: AppWindow,
    name: 'Desarrollo de Plataformas & SaaS',
    description: 'Construyo aplicaciones web a medida, desde MVPs hasta sistemas complejos, listas para escalar contigo.',
  },
  {
    Icon: BarChart,
    name: 'Análisis de Datos & Reportes',
    description: 'Integro dashboards y analítica para que tomes decisiones basadas en datos, visualizando el rendimiento real de tu negocio.',
  },
  {
    Icon: Bot,
    name: 'Soluciones con IA',
    description: 'Implemento soluciones de inteligencia artificial para automatizar procesos, personalizar experiencias y potenciar tus resultados.',
  },
];

export function FeaturedServices() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative scroll-mt-16 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 id="services-title" className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">Servicios destacados</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Soluciones tecnológicas escalables para cada etapa de tu crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ Icon, name, description }) => (
            <article key={name} className="group rounded-xl border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-primary/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-transform duration-300 group-hover:-translate-y-1">
                <Icon aria-hidden="true" className="h-7 w-7" />
              </div>
              <h3 className="font-headline text-lg font-semibold">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
