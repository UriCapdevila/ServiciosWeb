import { AppWindow, BarChart, Bot, Rocket } from 'lucide-react';

const services = [
  { icon: <Rocket className="h-8 w-8" />, name: 'Creación de Landing Pages' },
  { icon: <AppWindow className="h-8 w-8" />, name: 'Aplicaciones Web (SaaS)' },
  { icon: <BarChart className="h-8 w-8" />, name: 'Análisis de Datos & Reportes' },
  { icon: <Bot className="h-8 w-8" />, name: 'Integración de IA' },
];

export function FeaturedServices() {
  return (
    <section id="services" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">Servicios Destacados</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Soluciones tecnológicas diseñadas para llevar tu negocio al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 text-accent">{service.icon}</div>
              <h3 className="text-lg font-semibold font-headline">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
