# 组件命名eslint插件
针对组件命名规范设计，默认采用组件名称大驼峰命名；禁止对组件名称命名为`index.{vue,tsx,jsx}`或者`Index.{vue,tsx,jsx}`，此外，可根据配置使用命名方式
## 使用
```javascript
export default [
    {
        name: 'component-file',
        plugins: {
            'component-file': componentFile,
        },
        rules: {
            'component-file/component-naming': [
                'error',
                {
                    '**/src/**/*.{jsx,tsx,vue}': 'PASCAL_CASE', // 对组件统一使用大驼峰
                }
            ],
            'component-file/no-index-naming': [ // 禁止对组件命名index或者Index
                'error',
                '**/src/**/*.{jsx,tsx,vue}'
            ],
        }
    }
]
```
## 规则
### no-index-naming
```javascript
    rules: {
      'component-file/no-index-naming': [ // 禁止使用index方式命名
        'error',
        '**/src/**/*.{jsx,tsx,vue}'
      ],
    }
    
    // 配置多选
rules: {
    'component-file/no-index-naming': [ // 禁止使用index方式命名
        'error',
        ['**/src/**/*.{jsx,tsx,vue}', '**/packages/**/*.{jsx,tsx,vue}']
    ],
}
```

### component-naming
```javascript
    rules: {
      'component-file/component-naming': [
        'error',
        {
          '**/src/**/*.{jsx,tsx,vue}': 'PASCAL_CASE', // 对组件统一使用大驼峰
        }
      ]
    }
```
## 命名规则
```javascript

  CAMEL_CASE // Hello, helloWorld,
  
  PASCAL_CASE // Hello, HelloWorld,
  
  SNAKE_CASE // hello, hello_world,
  
  KEBAB_CASE // hello, hello-world,
  
  SCREAMING_SNAKE_CASE // HELLO, HELLO_WORLD,
  
  FLAT_CASE // hello, helloworld
```
