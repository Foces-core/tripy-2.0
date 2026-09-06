<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->

## CLI efficiency (rtk)

`rtk` is installed (`C:\Users\sebin\AppData\Local\Microsoft\W.` shim) and
proxies common CLIs with token-optimized output. Prefer it for noisy commands:

- `rtk git status`, `rtk git log`, `rtk diff` instead of raw git
- `rtk pnpm <cmd>` for install/build/test output
- `rtk test` / `rtk err -- <cmd>` to show only failures/errors
- `rtk rg <pattern>` / `rtk grep <pattern>` for grouped file hits
- `rtk --ultra-compact` for even shorter output when context is tight

Also available natively: `gh`, `fd`, `rg`, `fzf`, `jq`, `pnpm`, `vercel`.
Do not use `pnpm exec <bin>` (pnpm v12 workspace quirk fails); call
`.\node_modules\.bin\<bin>` directly or expose a package.json script.
