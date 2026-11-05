import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Consultoría de datos e inteligencia artificial",
  description: "Ordenamos fuentes, indicadores y casos de uso para construir analítica, tableros y soluciones de IA conectadas con decisiones reales.",
  alternates: { canonical: "/servicios/consultoria-datos-ia" },
  openGraph: {
    title: "Consultoría de datos e IA | Terradata AI Solutions",
    description: "De datos dispersos a decisiones, tableros y soluciones de inteligencia artificial utilizables.",
    url: "/servicios/consultoria-datos-ia",
  },
};

export default function DataAiServicePage() {
  return <ServicePage service={serviceDetails.dataAi} />;
}
