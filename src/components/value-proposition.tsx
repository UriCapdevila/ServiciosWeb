import { BrainCircuit, Code, DatabaseZap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Desarrollo a Medida',
    description: 'Construyo soluciones web rápidas, escalables y optimizadas, desde landing pages hasta SaaS complejos.',
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    title: 'Inteligencia de Datos',
    description: 'Extraigo valor de tus datos: dashboards, análisis predictivo y automatización de procesos con IA.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Estrategia Integral',
    description: 'Uno la tecnología con tus objetivos de negocio para crear productos digitales que generan un impacto real.',
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
