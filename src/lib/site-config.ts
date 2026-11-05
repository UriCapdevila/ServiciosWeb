export const siteConfig = {
  name: "Terradata AI Solutions",
  shortName: "Terradata",
  url: "https://urielcapdevilaservicios.netlify.app",
  legalLead: "Uriel Emanuel Alejandro Capdevila",
  email: "Uri_CapdevilaWRK@outlook.com",
  phone: "+54 9 11 5726 7816",
  location: "Buenos Aires, Argentina",
  links: {
    linkedin: "https://www.linkedin.com/in/uriel-capdevila0024/",
    github: "https://github.com/UriCapdevila",
    repository: "https://github.com/UriCapdevila/ServiciosWeb",
    whatsapp: "https://wa.me/5491157267816",
    cv: "/URIELCAPDEVILACV.pdf",
  },
  features: {
    teamCarousel: true,
  },
} as const;

export const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Consulta para Terradata AI Solutions"
)}`;
