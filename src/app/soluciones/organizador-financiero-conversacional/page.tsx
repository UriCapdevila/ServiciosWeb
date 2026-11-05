import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutionDetails } from "@/lib/solutions";

const solution = solutionDetails.finance;

export const metadata: Metadata = {
  title: "Organizador financiero conversacional",
  description: "Prototipo educativo para organizar información sobre deudas, prioridades y hábitos mediante una conversación guiada.",
  alternates: { canonical: `/soluciones/${solution.slug}` },
  openGraph: {
    title: "Organizador financiero conversacional | Terradata AI Solutions",
    description: "Una experiencia guiada de educación y organización financiera, actualmente en desarrollo.",
    url: `/soluciones/${solution.slug}`,
  },
};

export default function FinancialOrganizerPage() {
  return <SolutionPage solution={solution} />;
}
