/**
 * @Author: 十三
 * @Date: 2024/12/17
 * @email: 2429120006@qq.com
 * @Description: 文件夹命名惯例规则，仅对文件夹生效
*/
import micromatch from 'micromatch';
import {DEFAULT_FOLDER_PATTERN, NAMING_MAP} from '../constants';
import {getAllSubPaths, getChunkFolder, getFolderPath, getFullPath, getLastSubPath, isEmpty, isNil} from '../utils';
import type { Rule,AST } from 'eslint'
import { FOLDER_MATCH_ERROR_MESSAGE } from "../constants/error-message";
export default {
    meta: {
        type: 'layout',
        docs: {
            description: 'The naming convention for folders only applies to folders',
            category: 'Stylistic Issues',
            recommended: false
        },
        fixable: null,
        schema: [
            {
                additionalProperties: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        }
                    ]
                }
            },
        ],
        messages: {
            matchError: FOLDER_MATCH_ERROR_MESSAGE
        }
    },
    create(context: Rule.RuleContext) {
        return {
            Program(node: AST.Program) {
                const rulesOptions = context.options[0] as Record<any, keyof typeof NAMING_MAP>;
                const filenameWithPath = getFullPath(context); // 获取当前工作文件路径
                const folderPath = getFolderPath(filenameWithPath); // 获取文件夹
                let rules = rulesOptions;
                if (!rulesOptions || Object.keys(rulesOptions).length === 0) {
                    rules = {[DEFAULT_FOLDER_PATTERN]: 'KEBAB_CASE'} // 默认烤串
                    ;
                }
                for (const [folderPattern, namingPattern] of Object.entries(rules)) {

                    if (!micromatch.isMatch(folderPath, folderPattern, {contains: true})) {
                        continue
                    }
                    const subPaths = getAllSubPaths(folderPath);
                    for (const subPath of subPaths) {
                        const matchedPaths = micromatch.capture(folderPattern, subPath, {
                            dot: true,
                        });
                        if (isNil(matchedPaths)) continue;
                        const folderPaths = matchedPaths?.filter(p=> !isEmpty(p)).reduce((s, p) => s.concat(getChunkFolder(p)), []);
                        const target = NAMING_MAP[namingPattern] ?? NAMING_MAP.KEBAB_CASE;

                        for (const folder of folderPaths) {
                            if (!micromatch.isMatch(folder, target)) {
                                context.report({
                                    node,
                                    messageId: 'matchError',
                                    data: {
                                        subPath,
                                        folder,
                                        target: namingPattern,
                                    }
                                })
                            }
                        }

                    }
                }
            }
        };
    }
} as unknown as Rule.RuleModule;
