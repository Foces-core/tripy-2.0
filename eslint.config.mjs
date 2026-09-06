import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  ...compat.config({ extends: ["next/core-web-vitals", "next/typescript"] }),
  { ignores: [".next/**", "coverage/**", "convex/_generated/**", "next-env.d.ts"] },
  {
    files: ["*.mjs", "*.cjs", "*.js"],
    rules: { "import/no-anonymous-default-export": "off" },
  },
];

export default config;
