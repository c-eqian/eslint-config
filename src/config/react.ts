
import { pluginReact, pluginReactHooks, pluginReactRefresh } from '../plugins'
import type { Linter } from 'eslint'
export const reactConfig:Linter.Config[] = [
    {
        name: 'react-plugin',
        plugins: {
            'react-hooks': pluginReactHooks,
            'react-refresh': pluginReactRefresh,
            'react': pluginReact as any,
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            // 版本高于17，需要禁用
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            ...pluginReactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
        }
    }
]
