import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    target: "node18.18",
    dts: true,
  },
  {
    entry: ["src/prettier.ts"],
    format: ["esm"],
    target: "node18.18",
    clean: true,
    dts: false,
  },
]);
