# Delivery status

Last updated: 2026-11-05

## Current phase

`PRODUCTION_DEPLOYMENT` — `IN_PROGRESS`

Harness, technical SEO, information architecture, conversion, organic content
and browser QA are implemented as stable, verified blocks. The owner approved
direct publication to `main`; GitHub and Netlify verification are in progress.

## Completed

- [x] Identify the production source repository and confirm the Netlify project
  deploys from `UriCapdevila/ServiciosWeb`.
- [x] Record the current Next.js architecture and deployment assumptions.
- [x] Add repository-local harness checks and one full verification command.
- [x] Add a CI workflow that installs with `npm ci` and runs the full harness.
- [x] Define SEO acceptance checks for metadata, robots, sitemap, canonical URL,
  structured data, and service-route coverage.
- [x] Remove the unused Genkit/Firebase scaffold and its dependency surface.
- [x] Add canonical metadata, robots, sitemap and truthful structured data.
- [x] Add indexable pages for automation, data and AI, and custom software.
- [x] Replace mail-only conversion with a qualified Netlify contact form while
  preserving WhatsApp and email alternatives.
- [x] Make service and engagement cards navigable.
- [x] Add visible founder evidence, a transparent cases policy and a verifiable
  project case without invented clients or metrics.
- [x] Add a reusable article template, resources index and first buyer-intent
  guide with authorship and BlogPosting structured data.
- [x] Verify representative routes in the production build on desktop and a
  mobile viewport, including absence of horizontal overflow.
- [x] Verify route-specific titles, canonicals, robots directives, JSON-LD,
  keyboard skip-link focus, contact form structure and zero observed console
  warnings/errors.
- [x] Verify rendered `robots.txt` and sitemap coverage for all indexable routes.

## In progress

- [ ] Publish the verified release through `main`, confirm GitHub Actions, and
  verify the resulting Netlify production deployment.

## Pending

- [ ] `BRAND_DECISION`: assess the Terradata/Teradata naming collision before
  investing in a permanent domain or trademark. This is a user-owned decision.
- [ ] `CUSTOM_DOMAIN`: select the permanent public domain, then replace the
  temporary Netlify canonical origin through `siteConfig.url`.
- [ ] `CLIENT_PROOF`: add real client cases, testimonials and outcome metrics only
  after evidence and publication permission are supplied.

## Known blockers and constraints

- A permanent production domain has not been selected. Use the current Netlify
  URL as the canonical origin until the owner provides the final domain.
- Real clients, results, testimonials, prices, and team claims must be supplied
  or verified; the implementation must not fabricate them.
- `npm audit` reports 8 remaining transitive advisories (7 moderate, 1 high).
  The high advisory is the `postcss` version bundled by Next.js 15; npm proposes
  a forced Next.js 16 major upgrade. That breaking migration is intentionally
  not applied inside this phase. The moderate `minimatch` chain is under the
  TypeScript ESLint toolchain. Reassess both when the framework/toolchain is
  upgraded; do not use `npm audit fix --force` without a dedicated migration.

## Verification record

Record the latest full run here when implementation phases complete:

| Date | Commit/worktree | Command | Result |
| --- | --- | --- | --- |
| 2026-11-05 | harness foundation | `node scripts/verify-harness.mjs` | PASS |
| 2026-11-05 | harness foundation | `npm audit fix` | 109 initial advisories reduced to 8 transitive advisories |
| 2026-11-05 | integrated branch | `npm run verify` | PASS — lint, typecheck, SEO contract and 14-page production build |
| 2026-11-05 | local production server | Chrome extension QA | PASS — desktop/mobile, metadata, routes, focus, form, console, robots and sitemap |
