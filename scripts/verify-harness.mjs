import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const requiredFiles = [
  "AGENTS.md",
  "docs/ARCHITECTURE.md",
  "docs/DECISIONS.md",
  "docs/EXECUTION_PLAN.md",
  "docs/STATUS.md",
  ".github/workflows/ci.yml",
  "scripts/verify-harness.mjs",
  "scripts/verify-seo.mjs",
  "public/__forms.html",
];

const errors = [];

for (const file of requiredFiles) {
  try {
    await access(file, constants.R_OK);
  } catch {
    errors.push(`Missing required harness file: ${file}`);
  }
}

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const requiredScripts = ["build", "lint", "typecheck", "verify", "verify:harness", "verify:seo"];

for (const script of requiredScripts) {
  if (!packageJson.scripts?.[script]) {
    errors.push(`package.json is missing script: ${script}`);
  }
}

const status = await readFile("docs/STATUS.md", "utf8");
for (const section of ["## Completed", "## In progress", "## Pending", "## Known blockers and constraints"]) {
  if (!status.includes(section)) {
    errors.push(`docs/STATUS.md is missing section: ${section}`);
  }
}

const staticForm = await readFile("public/__forms.html", "utf8");
for (const marker of ['name="contacto"', 'data-netlify="true"', 'name="form-name"']) {
  if (!staticForm.includes(marker)) {
    errors.push(`public/__forms.html is missing Netlify Forms marker: ${marker}`);
  }
}

const interactiveForm = await readFile("src/components/contact-form.tsx", "utf8");
if (interactiveForm.includes("data-netlify")) {
  errors.push("The React contact form must not declare data-netlify; detection belongs in public/__forms.html");
}

if (!interactiveForm.includes('action="/__forms.html"')) {
  errors.push("The React contact form must submit to the static Netlify Forms endpoint");
}

if (errors.length > 0) {
  console.error("Harness verification failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Harness verification passed (${requiredFiles.length} files, ${requiredScripts.length} scripts).`);
