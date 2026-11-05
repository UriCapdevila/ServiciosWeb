import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutionDetails } from "@/lib/solutions";

const solution = solutionDetails.gestures;

export const metadata: Metadata = {
  title: "Interfaz gestual para aprendizaje",
  description: "Caso tecnológico de visión computacional para controlar contenidos mediante gestos, presencia y eventos en tiempo real.",
  alternates: { canonical: `/soluciones/${solution.slug}` },
  openGraph: {
    title: "Interfaz gestual para aprendizaje | Terradata AI Solutions",
    description: "Exploración de interacción sin contacto para contenidos, capacitación y experiencias accesibles.",
    url: `/soluciones/${solution.slug}`,
  },
};

export default function GestureInterfacePage() {
  return <SolutionPage solution={solution} />;
}
