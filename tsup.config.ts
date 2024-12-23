import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/preset-config/index.ts"],
    format: ["esm"],
    target: "node18.18",
    dts: true,
  },
  {
    entry: ["src/preset-config/prettier.ts"],
    format: ["esm"],
    target: "node18.18",
    clean: true,
    dts: false,
  },
]);
