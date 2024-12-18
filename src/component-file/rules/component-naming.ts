/**
 * @Author: 十三
 * @Date: 2024/12/17
 * @email: 2429120006@qq.com
 * @Description: 组件命名惯例规则
 */
import micromatch from "micromatch";
import {
  COMPONENT_EXTNAME,
  DEFAULT_PATH_PATTERN,
  NAMING_MAP,
} from "../constants";
import { getExtname, getFilenameNotExt, getFullPath } from "../utils";
import type { AST, Rule } from "eslint";
export default {
  meta: {
    type: "layout",
    docs: {
      description:
        "Enforce PascalCase for component filenames with .vue or .tsx extension",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        additionalProperties: {
          type: "string",
        },
      },
      {
        type: "object",
        properties: {
          errorMessage: { type: "string" },
        },
      },
    ],
  },
  create(context: Rule.RuleContext) {
    return {
      Program(node: AST.Program) {
        const rulesOptions = context.options[0] as Record<
          any,
          keyof typeof NAMING_MAP
        >;
        const filenameWithPath = getFullPath(context);
        const basename = getFilenameNotExt(filenameWithPath);
        const extname = getExtname(filenameWithPath);
        let rules = rulesOptions;
        if (!rules || Object.keys(rules).length === 0) {
          rules = { [DEFAULT_PATH_PATTERN]: "PASCAL_CASE" }; // 对组件统一使用大驼峰}
        }
        for (const [filenamePattern, targetPattern] of Object.entries(rules)) {
          if (
            micromatch.isMatch(filenameWithPath, filenamePattern) &&
            COMPONENT_EXTNAME.includes(extname.toLowerCase())
          ) {
            const target = NAMING_MAP[targetPattern] ?? NAMING_MAP.PASCAL_CASE;
            if (!micromatch.isMatch(basename, target)) {
              context.report({
                node,
                message: `Component filename "${basename}${extname}" should be in ${targetPattern ?? "PASCAL_CASE"}.`,
              });
            }
          }
        }
      },
    };
  },
} as unknown as Rule.RuleModule;
