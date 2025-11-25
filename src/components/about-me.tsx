import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GraduationCap, Briefcase } from 'lucide-react';

export function AboutMe() {
  const avatar = PlaceHolderImages.find(p => p.id === 'developer-portrait');
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Sobre Mí</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Soy un desarrollador y científico de datos apasionado por construir productos que no solo funcionen bien, sino que también aporten un valor tangible al negocio.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Formación en Ciencia de Datos</h3>
                  <p className="text-muted-foreground">Mi base académica me permite abordar los problemas desde una perspectiva analítica y basada en evidencia.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Experiencia Freelance</h3>
                  <p className="text-muted-foreground">He colaborado con startups y empresas consolidadas, adaptándome a diferentes industrias y desafíos técnicos.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            {avatar && (
                <Image
                  src={avatar.imageUrl}
                  alt="Developer Portrait"
                  width={400}
                  height={400}
                  data-ai-hint={avatar.imageHint}
                  className="rounded-full object-cover aspect-square border-4 border-primary/20 shadow-lg shadow-primary/10 h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}