import * as _pluginIgnore from "eslint-config-flat-gitignore";
import * as _pluginImport from "eslint-plugin-import-x";

import * as _pluginUnusedImports from "eslint-plugin-unused-imports";

import { interopDefault } from "./parsePluginsImports";

/**
 * 从 ESLint 中分离出特定于 JavaScript 的功能
 */
import * as _pluginJs from "@eslint/js";
import * as _pluginStylistic from "@stylistic/eslint-plugin";

import * as _pluginConfigPrettier from "eslint-config-prettier";

import * as _pluginPrettier from "eslint-plugin-prettier";

import * as _pluginVue from "eslint-plugin-vue";

import * as _pluginTypescript from "typescript-eslint";

/**
 * 按字母顺序、自然顺序或行长对各种数据进行排序的规则，例如对象、导入、TypeScript 类型、枚举、JSX 属性、Svelte 属性等
 */
import * as _pluginPerfectionist from "eslint-plugin-perfectionist";

import _pluginReact from "eslint-plugin-react";
/** react 插件*/
// @ts-ignore
import reactHooks from "eslint-plugin-react-hooks";
// @ts-ignore
import reactRefresh from "eslint-plugin-react-refresh";
export const pluginIgnore = interopDefault(_pluginIgnore);
export const pluginImport: any = interopDefault(_pluginImport);
export const pluginUnusedImports = interopDefault(_pluginUnusedImports);
export const pluginJs = interopDefault(_pluginJs);
export const pluginStylistic = interopDefault(_pluginStylistic);
export const pluginConfigPrettier: any = interopDefault(_pluginConfigPrettier);
export const pluginPrettier: any = interopDefault(_pluginPrettier);
export const pluginTypescript: any = interopDefault(_pluginTypescript);
export const pluginVue: any = interopDefault(_pluginVue);

export * as _pluginParser from "vue-eslint-parser";
export const pluginPerfectionist: any = interopDefault(_pluginPerfectionist);
export const pluginReactHooks: any = interopDefault(reactHooks);
export const pluginReactRefresh = interopDefault(reactRefresh);
export const pluginReact = interopDefault(_pluginReact);

import namingPlugin from "eslint-plugin-file-naming";
export const fileNamingPlugin = interopDefault(namingPlugin)
