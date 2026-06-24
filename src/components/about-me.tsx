import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Linkedin, Download, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { siteConfig } from '@/lib/site-config';

const skills = [
  'Python',
  'SQL',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Pandas',
  'Power BI',
  'Git',
  'APIs REST',
];

export function AboutMe() {
  const avatar = PlaceHolderImages.find(p => p.id === 'developer-portrait');
  return (
    <section id="about" aria-labelledby="about-title" className="relative scroll-mt-16 overflow-hidden bg-card/50 py-12 md:py-24 lg:py-32">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)),_transparent_40%)]" />
        </div>

      <div className="container px-4 md:px-6 z-10 relative">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                {siteConfig.fullName}
              </div>
              <h2 id="about-title" className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Conoce al profesional detrás del código</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Soy un desarrollador híbrido con una misión: transformar datos en soluciones de negocio y construir la tecnología que las impulsa.
              </p>
            </div>
            <div className="text-muted-foreground space-y-4 text-lg">
                <p>
                Como estudiante avanzado de Ciencia de Datos y Desarrollador Full Stack, combino la analítica de negocio con la programación (Python, SQL, JavaScript) para optimizar procesos, automatizar tareas y crear visualizaciones de datos que realmente aportan valor.
                </p>
                <p>
                Mi experiencia en gestión administrativa me ha enseñado a entender el negocio desde adentro, mientras que mi pasión por la tecnología me lleva a buscar siempre la mejor solución técnica.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-semibold font-headline">Mis Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-md">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={siteConfig.links.resume} download>
                  <Download className="mr-2 h-5 w-5" /> Descargar CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center pt-12 md:pt-0">
            {avatar && (
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                    <Image
                    src={avatar.imageUrl}
                    alt="Retrato de Uriel Capdevila"
                    width={400}
                    height={400}
                    data-ai-hint={avatar.imageHint}
                    className="rounded-full object-cover aspect-square border-4 border-primary/20 shadow-lg shadow-primary/10"
                    />
                    <div aria-hidden="true" className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse-slow"/>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
