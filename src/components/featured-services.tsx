import { AppWindow, BarChart, Bot, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Rocket className="h-8 w-8" />,
    name: 'Landing Pages Estratégicas',
    description: 'Diseño y desarrollo landings de alto impacto que convierten visitantes en clientes, optimizadas para SEO y velocidad.',
  },
  {
    icon: <AppWindow className="h-8 w-8" />,
    name: 'Desarrollo de Plataformas & SaaS',
    description: 'Construyo aplicaciones web a medida, desde MVPs hasta sistemas complejos, listas para escalar contigo.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    name: 'Análisis de Datos & Reportes',
    description: 'Integro dashboards y analítica para que tomes decisiones basadas en datos, visualizando el rendimiento real de tu negocio.',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    name: 'Soluciones con IA',
    description: 'Implemento soluciones de inteligencia artificial para automatizar procesos, personalizar experiencias y potenciar tus resultados.',
  },
];

export function FeaturedServices() {
  return (
    <section id="services" className="relative py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary transition-transform duration-300 ease-in-out hover:scale-105">Servicios Destacados</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Soluciones tecnológicas escalables para cada etapa de tu crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="mb-4 text-accent">{service.icon}</div>
                    <h3 className="text-lg font-semibold font-headline">{service.name}</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="relative z-10 flex flex-col justify-center h-full text-center p-6">
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
