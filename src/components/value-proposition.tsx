import { BrainCircuit, Code, DatabaseZap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Desarrollo a Medida',
    description: 'Soluciones versátiles: desde sitios web de alto impacto hasta plataformas SaaS. Construyo bases digitales sólidas y optimizadas, listas para escalar cuando tu negocio lo requiera.',
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    title: 'Inteligencia de Datos',
    description: 'No dejes que tus datos se pierdan. Integro analítica avanzada y dashboards interactivos en tus proyectos para que visualices el rendimiento real y detectes nuevas oportunidades.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Estrategia Integral',
    description: 'Conecto la tecnología con tus metas. Ya sea que estés validando una idea o expandiendo operaciones, diseño la arquitectura técnica que tu etapa actual necesita.',
  },
];

export function ValueProposition() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
               {feature.icon}
              <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
