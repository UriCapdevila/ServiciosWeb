import { siteConfig } from "@/lib/site-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/terradata-logo.svg`,
  image: `${siteConfig.url}/og.png`,
  description:
    "Consultoría de datos, inteligencia artificial, automatización y software a medida en Buenos Aires.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  founder: {
    "@type": "Person",
    name: siteConfig.legalLead,
    sameAs: siteConfig.links.linkedin,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    availableLanguage: ["es"],
  },
  sameAs: [siteConfig.links.linkedin, siteConfig.links.whatsapp],
} as const;

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
