export const siteConfig = {
  name: "Terradata AI Solutions",
  shortName: "Terradata",
  legalLead: "Uriel Emanuel Alejandro Capdevila",
  email: "Uri_CapdevilaWRK@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/uriel-capdevila0024/",
    whatsapp: "https://wa.me/+5491157267816",
  },
  features: {
    teamCarousel: false,
  },
} as const;

export const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Consulta para Terradata AI Solutions"
)}`;