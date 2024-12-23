import * as pluginImport from "eslint-plugin-import-x";
import { eslintPresets } from "./src/preset-config";
export default eslintPresets([
  {
    ...pluginImport.configs.typescript,
    name: "eqian/pluginImport",
  },
  {
    ignores: ["eslint.config.mjs"],
  },
]);
