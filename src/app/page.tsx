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
      <Header />
      <main className="z-10 flex-1">
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
