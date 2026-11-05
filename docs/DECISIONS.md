# Decision log

## ADR-001 — Repository-local verification contract

**Status:** Accepted — 2026-11-05

All completion checks are exposed through `npm run verify` and run unchanged in
GitHub Actions. This avoids undocumented machine-specific steps and gives both
humans and agents the same definition of done.

## ADR-002 — Staged SEO architecture

**Status:** Accepted — 2026-11-05

Technical crawlability is implemented before service-page expansion and content
publishing. Every phase ends in a stable build. Search pages must target a real
buyer intent and may not be generated solely to multiply keywords.

## ADR-003 — Truthful proof over placeholder social proof

**Status:** Accepted — 2026-11-05

The site must not invent testimonials, client logos, revenue figures, delivery
metrics, credentials, or team members. Missing proof is tracked as a content
dependency, not filled with plausible-looking claims.

## ADR-004 — Brand rename is owner-controlled

**Status:** Accepted — 2026-11-05

The similarity between Terradata and Teradata is a strategic and potentially
legal naming concern. The code may centralize brand values to make a later change
safe, but no automated task may rename the business without explicit approval.

## ADR-005 — Remove the unused Genkit and Firebase scaffold

**Status:** Accepted — 2026-11-05

The public application has no route or component importing `src/ai`, no Genkit
flow, and production is deployed by Netlify rather than Firebase App Hosting.
The isolated Genkit scaffold, its CLI scripts, `dotenv`, AI dependencies and
`apphosting.yaml` were removed. This reduces install size, audit surface and
maintenance noise. A future AI-backed product feature must be introduced as a
new, scoped architecture decision with explicit runtime and secret handling.
