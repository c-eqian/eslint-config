/**
 * @Author: 十三
 * @Date: 2024/12/17
 * @email: 2429120006@qq.com
 * @Description: 禁止命名文件名index规则
 */
import micromatch from "micromatch";
import { DEFAULT_PATH_PATTERN } from "../constants";
import { NO_INDEX_ERROR_MESSAGE } from "../constants/error-message";
import {
  getFilenameByFullPath,
  getFilenameNotExt,
  getFullPath,
} from "../utils";
import type { AST, Rule } from "eslint";
export default {
  meta: {
    type: "layout",
    docs: {
      description:
        "Matching file names named 'index' or 'Index' is not allowed",
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
        type: "array",
      },
    ],
    messages: {
      noIndex: NO_INDEX_ERROR_MESSAGE,
    },
  },
  create(context: Rule.RuleContext) {
    return {
      Program(node: AST.Program) {
        const rulesOptions = context.options[0];
        const filenameWithPath = getFullPath(context);
        const basename = getFilenameNotExt(filenameWithPath);
        const filename = getFilenameByFullPath(filenameWithPath);
        let _rules = rulesOptions;
        if (
          !rulesOptions ||
          (Array.isArray(rulesOptions) && rulesOptions.length === 0)
        ) {
          _rules = DEFAULT_PATH_PATTERN;
        }
        if (micromatch.isMatch(filenameWithPath, _rules)) {
          // 匹配到文件
          if (basename.toLowerCase() === "index") {
            context.report({
              node,
              messageId: "noIndex",
              data: {
                filename,
                filepath: filenameWithPath,
              },
            });
          }
        }
      },
    };
  },
} as unknown as Rule.RuleModule;
