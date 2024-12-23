import { pluginImport } from "../plugins";
import type { Config } from "../types";
export const imports: Config[] = [
  {
    ...pluginImport.configs.typescript,
    name: "eqian/imports/typescript",
  },
  {
    name: "eqian/imports",
    plugins: {
      import: pluginImport as any,
    },
    rules: {
      "import/first": "error",
      "import/no-default-export": "off",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-webpack-loader-syntax": "error",
    },
  },
];
