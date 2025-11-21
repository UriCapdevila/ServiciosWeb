import { AboutMe } from "@/components/about-me";
import { AnimatedBackground } from "@/components/animated-background";
import { FeaturedServices } from "@/components/featured-services";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ValueProposition } from "@/components/value-proposition";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="z-10 flex-1">
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
