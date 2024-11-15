
import type { Config } from '../types'
import {pluginImport} from "../plugins";
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
      "import/no-default-export": "error",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-webpack-loader-syntax": "error",
    },
  },
];
