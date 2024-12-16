
import { RuleTester } from 'eslint';
import componentFile from '../rules/component-name'
const ruleTester = new RuleTester();

export const testComponentName = ()=>{
    ruleTester.run('component-naming', componentFile, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.vue'
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/LoginLog.vue'
            }
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/login.vue',
                errors: [
                    {
                        message: 'Component filename "login.vue" should be in PASCAL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-log.vue',
                errors: [
                    {
                        message: 'Component filename "login-log.vue" should be in PASCAL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login.log.vue',
                errors: [
                    {
                        message: 'Component filename "login.log.vue" should be in PASCAL_CASE.'
                    }
                ]
            }
        ]
    })
// 携带配置-PASCAL_CASE
    ruleTester.run("component-naming with options：[{ '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }]", componentFile, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/LoginLog.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }
                ]
            }
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/login.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login.vue" should be in PASCAL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-log.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login-log.vue" should be in PASCAL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login.log.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'PASCAL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login.log.vue" should be in PASCAL_CASE.'
                    }
                ]
            }
        ]
    })
// 携带配置-CAMEL_CASE
    ruleTester.run("component-naming with options：[{ '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }]", componentFile, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/login.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/loginLog.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }
                ]
            }
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "Login.vue" should be in CAMEL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-log.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login-log.vue" should be in CAMEL_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login.log.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'CAMEL_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login.log.vue" should be in CAMEL_CASE.'
                    }
                ]
            }
        ]
    })

// 携带配置
    ruleTester.run("component-naming with options", componentFile, {
        valid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/login.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'KEBAB_CASE' }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-log.vue',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'KEBAB_CASE' }
                ]
            }
        ],
        invalid: [
            {
                code: "const name = 'test';",
                filename: 'src/components/Login.tsx',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'KEBAB_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "Login.tsx" should be in KEBAB_CASE.'
                    }
                ]
            },
            {
                code: "const name = 'test';",
                filename: 'src/components/login-log.jsx',
                options: [
                    { '**/components/**/*.{jsx,tsx,vue}': 'SNAKE_CASE' }
                ],
                errors: [
                    {
                        message: 'Component filename "login-log.jsx" should be in SNAKE_CASE.'
                    }
                ]
            }
        ]
    })

}
