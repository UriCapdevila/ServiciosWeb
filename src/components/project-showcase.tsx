import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './ui/card';

const projects = [
  {
    id: 1,
    title: 'SaaS Dashboard',
    description: 'Plataforma de análisis de datos para un cliente del sector financiero.',
    tags: ['React', 'Next.js', 'Tailwind', 'D3.js'],
    imageUrlId: 'project-1',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'E-commerce IA',
    description: 'Tienda online con motor de recomendaciones personalizado.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    imageUrlId: 'project-2',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Modelo de Churn',
    description: 'Sistema de predicción de abandono de clientes para una telco.',
    tags: ['Scikit-learn', 'Pandas', 'Flask'],
    imageUrlId: 'project-3',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Web Corporativa',
    description: 'Sitio web de marketing para una startup de inteligencia artificial.',
    tags: ['Next.js', 'Contentful', 'GraphQL'],
    imageUrlId: 'project-4',
    liveUrl: '#',
  },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Proyectos Recientes</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Una muestra de cómo la tecnología y los datos resuelven problemas reales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const placeholder = PlaceHolderImages.find(p => p.id === project.imageUrlId);
            return (
              <Card key={project.id} className="overflow-hidden group border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden">
                  {placeholder && (
                    <Image
                      src={placeholder.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={placeholder.imageHint}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="link" asChild className="mt-4 p-0 text-primary hover:text-accent">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Ver en vivo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
