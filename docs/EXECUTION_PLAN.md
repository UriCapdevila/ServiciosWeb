# Staged execution plan

Status values: `PENDING`, `IN_PROGRESS`, `DONE`, `BLOCKED`.

Only one implementation phase should be `IN_PROGRESS` per owner at a time.
Each phase ends at a stable, testable boundary.

## Phase 0 — Baseline (`DONE`)

Goal: identify the live source and preserve the existing site before changing it.

Acceptance:

- [x] Production repository identified.
- [x] Existing route, metadata and conversion behavior audited.
- [x] Current mobile and desktop presentation reviewed.

## Phase 1 — Harness foundation (`DONE`)

Goal: make future work reproducible and self-checking.

Acceptance:

- [x] Root `AGENTS.md` defines the operating contract.
- [x] Architecture, decisions, status and this plan are tracked.
- [x] `npm run verify` is the single CI completion gate.
- [x] SEO-specific source assertions are available as `npm run verify:seo`.
- [x] GitHub Actions runs the same repository commands used locally.

## Phase 2 — Technical SEO (`DONE`)

Goal: make the site crawlable, canonical and machine-readable.

Acceptance:

- [x] `src/app/robots.ts` returns a valid `MetadataRoute.Robots` object.
- [x] `src/app/sitemap.ts` returns every public indexable route.
- [x] Root metadata declares `metadataBase`, canonical URL, Open Graph URL and
  descriptive title/description.
- [x] Organization or ProfessionalService JSON-LD is rendered on public pages.
- [x] `npm run verify:seo` passes.

## Phase 3 — Information architecture (`DONE`)

Goal: turn broad homepage capabilities into indexable buyer-intent paths.

Acceptance:

- [x] Create indexable pages for the prioritized services.
- [x] Each page has unique title, description, H1, intent-aligned copy and CTA.
- [x] Homepage service cards link to the corresponding pages.
- [x] Header/footer navigation exposes the primary routes.
- [x] Sitemap includes the routes.

## Phase 4 — Conversion and trust (`DONE`)

Goal: give qualified visitors a low-friction next step and credible evidence.

Acceptance:

- [x] Replace mail-only primary conversion with a clear contact route while
  preserving email and WhatsApp fallbacks.
- [x] Define the diagnostic sprint with scope and deliverables. Timing remains a
  proposal-specific decision rather than an invented public promise.
- [x] Add an honest trust section using only verified people, work or credentials.
- [x] Do not publish fictional client logos, testimonials or outcome metrics.

## Phase 5 — Organic content foundation (`DONE`)

Goal: support ongoing organic acquisition without mass-produced thin content.

Acceptance:

- [x] Add a reusable article model with authorship and dates.
- [x] Publish at least one first-hand, buyer-intent resource.
- [x] Link resources to relevant services and a clear next step.

## Phase 6 — QA and release readiness (`DONE`)

Goal: verify the complete experience before any production deployment.

Acceptance:

- [x] `npm run verify` passes from a clean dependency install.
- [x] Desktop and mobile layouts are visually checked.
- [x] Keyboard navigation and focus states are checked.
- [x] Public routes return successful responses and have no console errors.
- [x] Status and decision logs reflect the delivered state.
- [x] Deployment is performed only after explicit owner approval.

## Phase 7 — Production deployment (`IN_PROGRESS`)

Goal: publish the verified release through `main` and confirm the Netlify result.

Acceptance:

- [x] The owner approved direct publication to `main` on 2026-11-05.
- [x] Push the verified commit to `main` without rewriting remote history.
- [x] Confirm GitHub Actions passes for the published commit.
- [ ] Confirm Netlify serves the new routes and production metadata.
