import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Automatización de procesos e integraciones",
  description: "Consultoría e implementación para automatizar procesos, integrar sistemas y reducir tareas manuales, demoras y errores operativos.",
  alternates: { canonical: "/servicios/automatizacion-procesos" },
  openGraph: {
    title: "Automatización de procesos | Terradata AI Solutions",
    description: "Rediseñamos procesos e integramos sistemas con reglas, APIs, controles y documentación clara.",
    url: "/servicios/automatizacion-procesos",
  },
};

export default function AutomationServicePage() {
  return <ServicePage service={serviceDetails.automation} />;
}
