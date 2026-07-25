import { AboutMe } from "@/components/about-me";
import { FeaturedServices } from "@/components/featured-services";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ValueProposition } from "@/components/value-proposition";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-foreground">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only">
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ValueProposition />
        <FeaturedServices />
        <ProjectShowcase />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}