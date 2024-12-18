import { writeFile } from "node:fs/promises";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import { builtinRules } from "eslint/use-at-your-own-risk";
import pico from "picocolors";
import { eslintPresets } from "../src";

const dts = await flatConfigsToRulesDTS(
  eslintPresets([
    {
      plugins: { "": { rules: Object.fromEntries(builtinRules) } },
    },
  ]),
  { includeAugmentation: false, exportTypeName: "Rules" },
);

await writeFile("src/typegen.ts", dts);

console.log(pico.green("Type definitions generated!"));
