import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const errors = [];

async function readRequired(file) {
  try {
    return await readFile(file, "utf8");
  } catch {
    errors.push(`Missing SEO contract file: ${file}`);
    return "";
  }
}

function requirePattern(source, pattern, message) {
  if (!pattern.test(source)) errors.push(message);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(target);
  }
  return files;
}

const layout = await readRequired("src/app/layout.tsx");
const robots = await readRequired("src/app/robots.ts");
const sitemap = await readRequired("src/app/sitemap.ts");
const services = await readRequired("src/lib/services.ts");

requirePattern(layout, /metadataBase\s*:/, "Root metadata must define metadataBase.");
requirePattern(layout, /alternates\s*:/, "Root metadata must define canonical alternates.");
requirePattern(layout, /openGraph\s*:/, "Root metadata must define Open Graph data.");
requirePattern(robots, /MetadataRoute\.Robots/, "robots.ts must return MetadataRoute.Robots.");
requirePattern(sitemap, /MetadataRoute\.Sitemap/, "sitemap.ts must return MetadataRoute.Sitemap.");
requirePattern(sitemap, /primaryServices\.map/, "sitemap.ts must include every primary service.");
requirePattern(sitemap, /\/contacto/, "sitemap.ts must include the contact route.");
requirePattern(sitemap, /\/casos/, "sitemap.ts must include the cases route.");
requirePattern(sitemap, /\/recursos/, "sitemap.ts must include the resources routes.");

for (const slug of services.matchAll(/slug:\s*["']([^"']+)["']/g)) {
  const route = path.join("src", "app", "servicios", slug[1], "page.tsx");
  try {
    await access(route, constants.R_OK);
  } catch {
    errors.push(`Missing service route for configured slug: ${slug[1]}`);
  }
}

try {
  const routeFiles = (await walk("src/app")).filter((file) => file.endsWith(`${path.sep}page.tsx`));
  for (const file of routeFiles) {
    if (file === path.join("src", "app", "page.tsx")) continue;
    const source = await readFile(file, "utf8");
    if (!/alternates\s*:\s*\{\s*canonical\s*:/.test(source)) {
      errors.push(`Public route metadata is missing a canonical URL: ${file}`);
    }
  }
} catch {
  errors.push("Unable to inspect app routes for canonical metadata.");
}

let structuredDataFound = false;
try {
  const sourceFiles = await walk("src");
  for (const file of sourceFiles) {
    const source = await readFile(file, "utf8");
    if (/application\/ld\+json/.test(source)) {
      structuredDataFound = true;
      break;
    }
  }
} catch {
  errors.push("Unable to inspect src/ for structured data.");
}

if (!structuredDataFound) {
  errors.push("No application/ld+json structured data renderer was found under src/.");
}

if (errors.length > 0) {
  console.error("SEO verification failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEO source contract passed.");
