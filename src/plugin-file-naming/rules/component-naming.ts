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
import {COMPONENT_ERROR_MESSAGE} from "../constants/error-message";
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
      },
    ],
    messages: {
      componentError: COMPONENT_ERROR_MESSAGE // 错误信息ID，下面会用到
    }
  },
  create(context: Rule.RuleContext) {
    return {
      // 抽象语法树的顶级
      Program(node: AST.Program) {
        // 获取配置项
        const rulesOptions = context.options[0] as Record<
          any,
          keyof typeof NAMING_MAP
        >;
        // 通过上下文信息，获取当前文件的完路径
        const filenameWithPath = getFullPath(context);
        // 根据文件路径，获取文件名称，不包含文件后缀
        const basename = getFilenameNotExt(filenameWithPath);
        // 获取扩展名
        const extname = getExtname(filenameWithPath);
        let rules = rulesOptions;
        // 如果没有配置项，使用默认规则（配置项应该配置为一个对象）
        if (!rules || Object.keys(rules).length === 0) {
          rules = { [DEFAULT_PATH_PATTERN]: "PASCAL_CASE" }; // 对组件统一使用大驼峰}
        }
        for (const [filenamePattern, targetPattern] of Object.entries(rules)) {
          // 是否匹配到指定文件
          if (
            micromatch.isMatch(filenameWithPath, filenamePattern) &&
            COMPONENT_EXTNAME.includes(extname.toLowerCase())
          ) {
            const target = NAMING_MAP[targetPattern] ?? NAMING_MAP.PASCAL_CASE;
            // 如果指定的路径下，文件名没有匹配到，导出错误
            if (!micromatch.isMatch(basename, target)) {
              context.report({
                node,
                messageId: 'componentError', // 错误信息ID
                data: { // 错误信息的占位符数据
                  basename: `${basename}${extname}`,
                  target: targetPattern ?? "PASCAL_CASE"
                },
              });
            }
          }
        }
      },
    };
  },
} as unknown as Rule.RuleModule;
