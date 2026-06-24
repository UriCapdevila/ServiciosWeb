import { AboutMe } from "@/components/about-me";
import { FeaturedServices } from "@/components/featured-services";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ValueProposition } from "@/components/value-proposition";
import { FadeInChildren } from "@/components/fade-in";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-foreground">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content" className="z-10 flex-1">
        <FadeInChildren>
          <Hero />
        </FadeInChildren>
        <FadeInChildren>
          <ValueProposition />
        </FadeInChildren>
        <FadeInChildren>
          <FeaturedServices />
        </FadeInChildren>
        <FadeInChildren>
          <ProjectShowcase />
        </FadeInChildren>
        <FadeInChildren>
          <AboutMe />
        </FadeInChildren>
      </main>
      <Footer />
    </div>
  );
}
