import { pluginTypescript } from "../plugins";
import type { Config } from "../types";
import { javascript, restrictedSyntaxJs } from "./javascript";
const _JS = "**/*.?([cm])js";
const _TS = "**/*.?([cm])ts";
const _TSX = "**/*.tsx";
export const typescriptCore = pluginTypescript.config({
  extends: [...pluginTypescript.configs.recommended],
  files: [_TS, _TSX],
  name: "eqian/typescript",
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-unsafe-function-type": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      { selector: "typeAlias", format: ["PascalCase"] },
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/prefer-as-const": "warn",

    "@typescript-eslint/prefer-literal-enum-member": [
      "error",
      { allowBitwiseExpressions: true },
    ],
    "no-restricted-syntax": [
      "error",
      ...restrictedSyntaxJs,
      "TSEnumDeclaration[const=true]",
    ],
  },
}) as Config[];
export { javascript };
export const typescript: Config[] = [
  ...typescriptCore,
  {
    files: ["**/*.d.ts"],
    name: "eqian/typescript/dts-rules",
    rules: {
      "eslint-comments/no-unlimited-disable": "off",
      "import/no-duplicates": "off",
      "no-restricted-syntax": "off",
      "unused-imports/no-unused-vars": "off",
    },
  },
  {
    files: [_JS, "**/*.cjs"],
    name: "eqian/typescript/cjs-rules",
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
