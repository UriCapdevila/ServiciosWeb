# Terradata repository operating contract

This repository is maintained as a harness-engineered Next.js project: work is
performed through small, verifiable phases and repository-local commands are
the source of truth for completion.

## Read first

Before changing code, read:

1. `docs/STATUS.md` for the current state and blockers.
2. `docs/EXECUTION_PLAN.md` for phase scope and acceptance criteria.
3. `docs/ARCHITECTURE.md` for boundaries and extension points.
4. `docs/DECISIONS.md` for decisions that should not be silently reversed.

## Working rules

- Work on one bounded phase at a time. Mark it `IN_PROGRESS` before editing and
  `DONE` only after its acceptance checks pass.
- Preserve the established visual identity unless the task explicitly changes
  it.
- Never invent clients, testimonials, metrics, credentials, prices, or project
  results. Use clearly labeled placeholders only when the UI requires them.
- Keep business copy and configuration in data modules when it is reused. Keep
  route-specific metadata close to its route.
- Prefer server components. Add `"use client"` only for actual browser state,
  effects, or event handling.
- Do not add dependencies when the platform or a small local utility is enough.
- Do not expose secrets in source, logs, fixtures, screenshots, or commits.
- Keep external links explicit and use `rel="noopener noreferrer"` for new-tab
  links.
- Update `docs/STATUS.md` whenever a phase changes state or a new blocker is
  discovered.

## Required quality gates

Run the narrowest relevant command while iterating, then run the full gate
before declaring a phase complete:

```bash
npm run lint
npm run typecheck
npm run build
npm run verify
```

SEO-specific work must also pass:

```bash
npm run verify:seo
```

`npm run verify` is the completion contract used by CI. A task is not complete
if the command fails, unless the failure is recorded as a concrete blocker in
`docs/STATUS.md` with the failing command and next action.

## Change safety

- Do not commit or publish directly to production without an explicit request.
- Keep generated output (`.next`, coverage, local logs) out of Git.
- When a phase is too large to finish, revert or isolate the partial edit and
  leave the phase `PENDING`; do not describe half-implemented behavior as done.
- Treat the brand name and any legal/trademark decision as a user-owned
  decision. Technical work may make branding configurable but must not rename
  the business without approval.
