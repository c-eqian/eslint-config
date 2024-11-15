
import type { Config } from '../types'
import {pluginConfigPrettier, pluginPrettier} from "../plugins";

const prettierConflictRules = { ...pluginConfigPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: Config[] = [
    {
        name: 'eqian/prettier',
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            ...prettierConflictRules,
            ...pluginPrettier.configs.recommended.rules,
            'prettier/prettier': [
                'warn',
                {
                    "singleQuote": true
                }
            ],
        },
    },
]
