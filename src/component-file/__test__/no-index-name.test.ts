
import { RuleTester } from 'eslint';
import noIndexName from '../rules/no-index-naming'
const ruleTester = new RuleTester();

export const testNoIndexName=()=>{
    ruleTester.run('no-index-naming', noIndexName, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.vue'
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/LoginLog.vue'
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/index-login.vue'
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-index.vue'
            }
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/index.vue',
                errors: [
                    {
                        message: 'Component filename "index.vue" cannot be named "index" or "Index".'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/Index.vue',
                errors: [
                    {
                        message: 'Component filename "Index.vue" cannot be named "index" or "Index".'
                    }
                ]
            },
        ]
    })
    ruleTester.run('no-index-naming with options', noIndexName, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.vue',
                options: ["**/components/**/*.{jsx,tsx,vue}"]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/LoginLog.vue',
                options: ["**/components/**/*.{jsx,tsx,vue}"]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/index.vue',
                options: ['**/packages/**/*.{jsx,tsx,vue}']
            },
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/index.vue',
                options: [['**/components/**/*.{jsx,tsx,vue}', '**/packages/**/*.{jsx,tsx,vue}']],
                errors: [
                    {
                        message: 'Component filename "index.vue" cannot be named "index" or "Index".'
                    }
                ]
            },
        ]
    })
}
