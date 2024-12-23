/**
 * @Author: 十三
 * @Date: 2024/12/17
 * @email: 2429120006@qq.com
 * @Description: 文件名命名惯例规则
 */
import micromatch from "micromatch";
import {
  NAMING_MAP, NORMAL_FILE_PATTERN,
} from "../constants";
import { getFilenameByFullPath, getFilenameNotExt, getFullPath} from "../utils";
import type { AST, Rule } from "eslint";
import {FILENAME_ERROR_MESSAGE} from "../constants/error-message";
export default {
  meta: {
    type: "layout",
    docs: {
      description: "The file name should be named according to the specified rule",
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
    messages: {
      filenameError: FILENAME_ERROR_MESSAGE
    }
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
        const filename = getFilenameByFullPath(filenameWithPath);
        let rules = rulesOptions;
        if (!rules || Object.keys(rules).length === 0) {
          rules = { [NORMAL_FILE_PATTERN]: "CAMEL_CASE" }; // 对普通文件统一使用小驼峰}
        }
        for (const [filenamePattern, targetPattern] of Object.entries(rules)) {
          if (
            micromatch.isMatch(filenameWithPath, filenamePattern)
          ) {
            const target = NAMING_MAP[targetPattern] ?? NAMING_MAP.CAMEL_CASE;
            if (!micromatch.isMatch(basename, target)) {
              context.report({
                node,
                messageId: 'filenameError',
                data: {
                  filename,
                  filepath: filenameWithPath,
                  target: targetPattern ?? 'CAMEL_CASE',
                }
              });
            }
          }
        }
      },
    };
  },
} as unknown as Rule.RuleModule;
