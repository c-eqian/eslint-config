import { pluginConfigPrettier, pluginPrettier } from "../plugins";
import type { Config } from "../types";

const prettierConflictRules = { ...pluginConfigPrettier.rules };
delete prettierConflictRules["vue/html-self-closing"];

export const prettier: Config[] = [
  {
    name: "eqian/prettier",
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      "prettier/prettier": "warn",
    },
  },
];
