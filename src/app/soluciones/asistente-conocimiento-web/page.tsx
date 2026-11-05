import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutionDetails } from "@/lib/solutions";

const solution = solutionDetails.knowledge;

export const metadata: Metadata = {
  title: "Asistente de conocimiento web",
  description: "Piloto de asistente con IA para consultar contenido web y documentación mediante respuestas con fuentes verificables.",
  alternates: { canonical: `/soluciones/${solution.slug}` },
  openGraph: {
    title: "Asistente de conocimiento web | Terradata AI Solutions",
    description: "Convertí documentación y contenido público en una experiencia de consulta conversacional con fuentes.",
    url: `/soluciones/${solution.slug}`,
  },
};

export default function KnowledgeAssistantPage() {
  return <SolutionPage solution={solution} />;
}
