import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Desarrollo de software a medida y MVPs",
  description: "Diseño y desarrollo de aplicaciones web, sistemas internos y MVPs, desde el diagnóstico hasta la puesta en producción y transferencia.",
  alternates: { canonical: "/servicios/desarrollo-software-medida" },
  openGraph: {
    title: "Software a medida y MVPs | Terradata AI Solutions",
    description: "Construimos aplicaciones y sistemas alrededor de tu operación, con alcance y entregables visibles.",
    url: "/servicios/desarrollo-software-medida",
  },
};

export default function SoftwareServicePage() {
  return <ServicePage service={serviceDetails.software} />;
}
