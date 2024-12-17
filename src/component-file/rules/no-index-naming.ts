/**
 * @Author: 十三
 * @Date: 2024/12/17
 * @email: 2429120006@qq.com
 * @Description: 组件禁止命名index规则
*/
import micromatch from 'micromatch';
import { COMPONENT_EXTNAME, DEFAULT_PATH_PATTERN } from '../constants';
import { getExtname, getFilenameNotExt, getFullPath} from '../utils';
import type { Rule,AST } from 'eslint'
export default {
    meta: {
        type: 'layout',
        docs: {
            description: 'A component filename cannot be named "index"',
            category: 'Stylistic Issues',
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            {
                additionalProperties: {
                    type: 'string'
                }
            },
            {
                type: 'array'
            }
        ]
    },
    create(context:Rule.RuleContext) {
        return {
            Program(node:AST.Program) {
                const rulesOptions = context.options[0];
                const filenameWithPath = getFullPath(context);
                const basename = getFilenameNotExt(filenameWithPath);
                const extname = getExtname(filenameWithPath);
                let _rules = rulesOptions;
                 if (!rulesOptions || (Array.isArray(rulesOptions) && rulesOptions.length === 0)) {
                    _rules = DEFAULT_PATH_PATTERN;
                }
                if (
                    micromatch.isMatch(filenameWithPath, _rules) &&
                    COMPONENT_EXTNAME.includes(extname.toLowerCase())
                ) {
                    // 匹配到文件
                    if (basename.toLowerCase() === 'index') {
                        context.report({
                            node,
                            message: `Component filename "${basename}${extname}" cannot be named "index" or "Index".`
                        });
                    }
                }
            }
        };
    }
}as unknown as Rule.RuleModule;
