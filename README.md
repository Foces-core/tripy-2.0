# Tripy 2.0

Live, three-day Python workshop scoreboard for FOCES CEC. Students see questions and team scores. Volunteers verify submissions and add points. Administrators control days, live status, and resets.

## Local development

Copy Convex deployment values into `.env.local`, then run:

```bash
pnpm install
pnpm dev
```

Run the full local gate before opening a pull request:

```bash
pnpm check
pnpm test:coverage
pnpm knip
```

`pnpm test:e2e` needs Playwright Chromium once: `pnpm exec playwright install chromium`.

## Safety note

The current role model uses shared event passwords. Treat them as credentials, rotate them after each event, and do not place defaults in source control. A real identity provider is required before this should manage personally attributable actions or long-lived admin access.
