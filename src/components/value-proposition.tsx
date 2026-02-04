import {
  BentoCard,
  BentoCardContent,
  BentoCardDescription,
  BentoCardHeader,
  BentoCardTitle,
  BentoGrid,
} from "./ui/bento-grid";
import { Code, Database, BrainCircuit } from "lucide-react";

const features = [
  {
    Icon: Code,
    name: "Desarrollo a Medida",
    description: "Soluciones versátiles: desde sitios web de alto impacto hasta plataformas SaaS. Construyo bases digitales sólidas y optimizadas, listas para escalar cuando tu negocio lo requiera.",
    className: "col-span-1 lg:col-span-1",
    background: <img alt="gradient" className="absolute -right-20 -top-20 opacity-60" src="/gradient.png" />,
  },
  {
    Icon: Database,
    name: "Inteligencia de Datos",
    description: "No dejes que tus datos se pierdan. Integro analítica avanzada y dashboards interactivos para que visualices el rendimiento real y detectes nuevas oportunidades.",
    className: "col-span-1 lg:col-span-1",
    background: <img alt="gradient" className="absolute -right-20 -top-20 opacity-60" src="/gradient.png" />,
  },
  {
    Icon: BrainCircuit,
    name: "Estrategia Integral",
    description: "Conecto la tecnología con tus metas. Ya sea que estés validando una idea o expandiendo operaciones, diseño la arquitectura técnica que tu etapa actual necesita.",
    className: "col-span-1 lg:col-span-2",
    background: <img alt="gradient" className="absolute -right-20 -top-20 opacity-60" src="/gradient.png" />,
  },
];

export function ValueProposition() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 font-headline transition-transform duration-300 ease-in-out hover:scale-105">
          Una Propuesta de Valor Diferencial
        </h2>
        <BentoGrid className="lg:grid-cols-2">
          {features.map(({ Icon, name, description, className, background }) => (
            <BentoCard key={name} className={className} background={background}>
              <BentoCardContent>
                <BentoCardHeader>
                  <Icon className="h-8 w-8 text-primary" />
                  <BentoCardTitle>{name}</BentoCardTitle>
                </BentoCardHeader>
                <BentoCardDescription>{description}</BentoCardDescription>
              </BentoCardContent>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
