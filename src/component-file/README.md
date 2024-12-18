# 组件命名eslint插件
> 总结在项目中不同团队人员开发习惯，出现各式各样的命名方式，如以小驼峰命名、大驼峰命名的等等，为了统一命名方式，由此该插件应运而生

针对组件命名规范设计，默认采用组件名称大驼峰命名；禁止对组件名称命名为`index.{vue,tsx,jsx}`或者`Index.{vue,tsx,jsx}`，此外，可根据配置使用命名方式

## 使用

```javascript
export default [
    {
        name: 'file-naming',
        plugins: {
            'file-naming': componentFile,
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
                '**/src/**/*.{jsx,tsx,vue}'
            ],
        }
    }
]
```
## 规则
### no-index-naming
在平时的组件命名方式中，有的喜欢以index为名的组件名称，有的以Index.vue为名的组件名称，还有的会以实际的模块名称命名（推荐），
以模块名为命名主要有利用更加直观的知道该组件的实际作用，此外在使用组件时，一般也会是以大驼峰的形式导出组件，因此，这样可以减少一定的观感疲劳
```javascript
    rules: {
      'file-naming/no-index-naming': [ // 禁止使用index方式命名
        'error',
        '**/src/**/*.{jsx,tsx,vue}'
      ],
    }
    
    // 配置多选
rules: {
    'file-naming/no-index-naming': [ // 禁止使用index方式命名
        'error',
        ['**/src/**/*.{jsx,tsx,vue}', '**/packages/**/*.{jsx,tsx,vue}']
    ],
}
```
除了以上配置组件命名外，你还可以配置任何命名的文件后缀，如`.ts`等
#### 示例

❎错误

```javascript
// src/components/index.vue
// error: Component filename "index.vue" cannot be named "index" or "Index".
// src/components/Index.vue
//error: Component filename "Index.vue" cannot be named "index" or "Index".
```

✅正确

```javascript
// src/components/Login.vue
// src/components/LoginLog.vue
```



### component-naming

组件命名方式根据不同人员的习惯会有不同的方式，在此插件中默认以大驼峰的形式命名，如果是一个单词的应以大写开头。
设计的来源主要是，平时在使用组件时，通常以一个大写开头的命名，此外，根据vue官方的推荐，也应该使用驼峰的命名方式；
这样做的好处是避免与原生HTML标签产生歧义，或者如果你不想使用该默认规则可以通过配置，选择合适自身习惯的规则，但是对于团队开发的项目而已，统一的开发规则是很有必要的。
```javascript
    rules: {
      'file-naming/component-naming': [
        'error',
        {
          '**/src/**/*.{jsx,tsx,vue}': 'PASCAL_CASE', // 对组件统一使用大驼峰
        }
      ]
    }
```
#### 示例

❎错误

```javascript
// src/components/login.log.vue
// error: Component filename "login.log.vue" should be in PASCAL_CASE.
// src/components/login-log.vue
//error: Component filename "login-log.vue" should be in PASCAL_CASE.
```

✅正确

```javascript
// src/components/Login.vue
// src/components/LoginLog.vue
```

### folder-naming

文件夹命名规则，默认为`KEBAB_CASE`

**如果匹配到文件，将会忽略文件，仅检查文件夹**

```javascript
    rules: {
      'file-naming/folder-naming': [
        'error',
        {
          '**/src/**/*': 'KEBAB_CASE', // 对组件统一使用烤肉串
        }
      ]
    }
// 配置多选
    rules: {
      'file-naming/folder-naming': [
        'error',
        {
          '**/src/**/*': 'KEBAB_CASE', // 对组件统一使用烤肉串
           '**/component/**/*': 'KEBAB_CASE', // 对组件统一使用烤肉串
        }
      ]
    }
```

#### 示例

❎错误

```javascript
// src/page/adminManage/index.vue
// error: In the path of the file "src/page/adminManage", the name of the folder "adminManage" does not match "KEBAB_CASE"
```

✅正确

```javascript
// src/components/index-login.vue
// src/components/login-index.vue
```

#### 忽略某项

可以通过配置字段`ignore`，值为一个数组字符串的项来进行忽略某个文件夹

```javascript
    rules: {
      'file-naming/folder-naming': [
        'error',
        {
          '**/src/**/*': 'PASCAL_CASE', // 对组件统一使用烤肉串
           '**/component/**/*': 'PASCAL_CASE', // 对组件统一使用烤肉串
            ignore: ['table-config', 'button-config'] // 仅支持指定文件夹，不支持glob匹配
        }
      ]
    }
```

❎错误

```javascript
// ignore: ['table-config'] 
// src/components/table-config/button-config/Login.vue
// error: In the path of the file "src/components/table-config/button-config", the name of the folder "button-config" does not match "PASCAL_CASE"
```

✅正确

```javascript
// ignore: ['table-config', 'button-config'] 
// src/components/table-config/button-config/Login.vue
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
