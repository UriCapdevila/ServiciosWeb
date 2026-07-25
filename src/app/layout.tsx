import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://urielcapdevilaservicios.netlify.app"),
  title: "Terradata AI Solutions | Tecnología, Datos e IA",
  description:
    "Consultoría boutique de tecnología, datos e inteligencia artificial. Diseñamos e implementamos soluciones que hacen avanzar tu negocio.",
  applicationName: "Terradata AI Solutions",
  authors: [{ name: "Terradata AI Solutions" }],
  category: "technology",
  icons: {
    icon: [
      {
        url: "/terradata-favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/terradata-favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Terradata AI Solutions",
    description: "Decisiones y sistemas que hacen avanzar tu negocio.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Terradata AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terradata AI Solutions",
    description: "Decisiones y sistemas que hacen avanzar tu negocio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}