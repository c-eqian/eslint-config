import { _pluginParser, pluginTypescript, pluginVue } from "../plugins";
import type { Config } from "../types";
import { typescriptCore } from "./typescript";
import type { Linter } from "eslint";
export const _VUE = "**/*.vue";
const vueTs: Config[] = typescriptCore
  .filter((config) => config.name !== "typescript-eslint/base")
  .map((config) => {
    return {
      ...config,
      files: [_VUE],
      name: `eqian/vue/${config.name?.replace("eqian/", "") || "anonymous"}`,
    };
  });
const vueCustomRules: Linter.RulesRecord = {
  "vue/block-order": ["error", { order: ["script", "template", "style"] }],
  "vue/custom-event-name-casing": ["error", "camelCase"],
  "vue/eqeqeq": ["error", "smart"],
  "vue/html-self-closing": [
    "error",
    {
      html: {
        component: "always",
        normal: "always",
        void: "any",
      },
      math: "always",
      svg: "always",
    },
  ],
  "vue/max-attributes-per-line": "off",

  "vue/multi-word-component-names": "off",
  "vue/no-constant-condition": "warn",
  "vue/no-empty-pattern": "error",
  "vue/no-loss-of-precision": "error",
  "vue/no-unused-refs": "error",
  "vue/no-useless-v-bind": "error",

  "vue/no-v-html": "off",
  "vue/object-shorthand": [
    "error",
    "always",
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  "vue/one-component-per-file": "off",
  "vue/padding-line-between-blocks": ["error", "always"],
  "vue/prefer-template": "error",
  "vue/require-default-prop": "off",
  "vue/require-prop-types": "off",
};
const vue3Rules: any = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs["vue3-essential"].rules,
  ...pluginVue.configs["vue3-strongly-recommended"].rules,
  ...pluginVue.configs["vue3-recommended"].rules,
};
export const vue: Linter.Config[] = [
  ...vueTs,
  {
    files: [_VUE],
    languageOptions: {
      parser: _pluginParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
    name: "eqian/vue",
    plugins: {
      "@typescript-eslint": pluginTypescript.plugin as any,
      vue: pluginVue,
    },
    processor: pluginVue.processors[".vue"],
    rules: {
      ...vue3Rules,
      ...vueCustomRules,
    },
  },
];
