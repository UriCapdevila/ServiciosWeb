# Architecture

## Runtime

- Next.js 15 App Router
- React 18
- TypeScript in strict mode
- Tailwind CSS 3
- Netlify production deployment from the GitHub `main` branch

The application is currently a server-rendered marketing site. It should remain
deployable with `npm run build` and should not require a database or runtime
secret for public marketing pages.

## Repository map

| Path | Responsibility |
| --- | --- |
| `src/app/` | Routes, layouts, route metadata, robots and sitemap |
| `src/components/` | Reusable presentation and interaction components |
| `src/lib/` | Typed business configuration and shared utilities |
| `public/` | Static brand and social assets |
| `scripts/` | Repository-local deterministic validation |
| `docs/` | Operating state, architecture, decisions and phase plan |
| `.github/workflows/` | CI invoking the same local verification contract |

## Boundaries

1. Public content must render without client-side JavaScript where practical.
2. Route metadata belongs in `src/app`; shared business facts belong in typed
   configuration under `src/lib`.
3. Service pages may share a template, but each route needs unique intent,
   metadata and substantive copy.
4. Structured data must describe only visible, truthful business information.
5. Contact actions may link to external providers, but core site rendering must
   not depend on them.
6. The canonical origin is centralized so a future domain migration is one
   configuration change rather than a search-and-replace operation.

## Verification model

`npm run verify` is the top-level gate:

1. Harness integrity (`verify:harness`)
2. ESLint (`lint`)
3. TypeScript (`typecheck`)
4. SEO source contract (`verify:seo`)
5. Production build (`build`)

The source assertions are intentionally dependency-free. Browser and deployment
verification remain Phase 6 checks because they require a running environment.
