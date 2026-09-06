import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "edge-runtime",
    include: ["convex/**/*.test.ts"],
    server: { deps: { inline: ["convex-test"] } },
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: ["convex/**/*.ts"],
      exclude: ["convex/_generated/**", "**/*.test.ts"],
      thresholds: { lines: 80, statements: 80, functions: 80, branches: 70 },
    },
  },
});
