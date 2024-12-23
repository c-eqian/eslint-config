import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  format: ["esm"],
  target: "node18.18",
  minify: true,
  dts: true,
});
