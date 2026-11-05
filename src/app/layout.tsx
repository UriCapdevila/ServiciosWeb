import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const title = "Consultoría de Datos, IA y Software en Argentina | Terradata";
const description =
  "Consultoría de datos, inteligencia artificial, automatización y software a medida en Buenos Aires. Del diagnóstico a la implementación y evolución.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Terradata AI Solutions",
  },
  description,
  applicationName: "Terradata AI Solutions",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: "Terradata AI Solutions",
  publisher: "Terradata AI Solutions",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    url: siteConfig.url,
    siteName: "Terradata AI Solutions",
    title,
    description,
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
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className="font-body antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
