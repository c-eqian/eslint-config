import {Config} from "../types";
import { fileNamingPlugin } from "../plugins";


export const fileNaming: Config[] = [
    {
        name: 'eqian/file-naming',
        plugins: {
            'file-naming': fileNamingPlugin,
        },
        rules: {
            'file-naming/component-naming': [
                'error',
                {
                    '**/src/**/*.{jsx,tsx,vue}': 'PASCAL_CASE', // 对组件统一使用大驼峰
                }
            ],
            'file-naming/no-index-naming': [ // 禁止对组件命名index或者Index
                'error',
                // @ts-ignore
               '**/src/**/*.{jsx,tsx,vue}'
            ],
            'file-naming/folder-naming': [
                'error',
                {
                    '**/src/**/*': 'KEBAB_CASE', // 对组件统一使用烤肉串
                }
            ],
            'file-naming/filename-naming': [
                'error',
                {
                    '**/src/**/*': 'CAMEL_CASE', // 对组件统一使用小驼峰
                }
            ],
        }
    }

]
