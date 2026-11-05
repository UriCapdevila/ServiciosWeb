import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { primaryServices, servicePath } from "@/lib/services";
import { publicSolutions, solutionPath } from "@/lib/solutions";

const lastModified = new Date("2026-11-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/casos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/soluciones`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contacto`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/recursos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/recursos/cuanto-cuesta-automatizar-un-proceso`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = primaryServices.map((service) => ({
    url: `${siteConfig.url}${servicePath(service)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = publicSolutions.map((solution) => ({
    url: `${siteConfig.url}${solutionPath(solution)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes];
}
