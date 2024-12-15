# eslint-config
在开发项目中是否还要为eslint的各种配置而烦恼？是否每次创建新项目而进行不断的复制、粘贴eslint配置？
现在，配置一些常用的`eslint`预设规则，可以解决以上问题。
采用[eslint9.x](https://eslint.nodejs.cn/docs/latest/use/getting-started)以上版本，使用扁平化配置规则，即对象数组方式
## 安装
```typescript
// npm insatll
npm install @eqian/eslint-config-preset --save-dev

// pnpm insatll
pnpm install @eqian/eslint-config-preset -D

```
## 使用
```typescript
import { eslintPresets } from '@eqian/eslint-config';
export default eslintPresets([
  {
      // 内置相关忽略文件，同样，也可以使用全局忽略文件，规则请查阅eslint文档
    ignores: ['eslint.config.mjs', '.yalc', 'yalc'],
    name: 'ignores',
  },
]);

```
## 预设ESlint规则
 - 预设相关`JavaScript`规则
 - 导入相关排序规则
 - 默认启用`vue`规则，如果非vue项目，可以传入第二个参数`{vue:false}`

## 自定义规则
支持添加自定义规则，详情查阅插件文档
如，使用单引号规则
```typescript
import { eslintPresets } from '@eqian/eslint-config';
export default eslintPresets([
    {
        ignores: ['eslint.config.mjs', '.yalc', 'yalc'],
        name: 'test',
    },
    // 自定义规则
    {
        rules: {
            "prettier/prettier": [
                "warn",
                {
                    "singleQuote": true
                }
            ],
            "@stylistic/quotes": ["error", "single"],
        }
    }
]);
```
## 配合prettier使用
已经内置`prettier`预设，在根目录的`package.json`中添加如下即可
```json
{
  "name": "xxx",
  "type": "module",
  "prettier": "@eqian/eslint-config-preset/prettier"
}
```
## 预设prettier规则
 - 单引号
 - 末尾使用分号
 - 函数单个参数省略括号
 - ...

## 自定义prettier规则
可根据[prettier](https://www.prettier.cn/docs/configuration.html)文档进行配置
如根目录下新建`prettier.config.mjs`
```javascript
// prettier.config.mjs
import prettier from '@eqian/eslint-config-preset/prettier'
const config = {
    ...prettier,
    semi: false,// 不使用分号结尾
    singleQuote: false, // 使用双引号
};

export default config;
```

## 模式切换
为了应对不同框架的`eslint`规则配置，现在支持进行模式切换。
通过配置`mode`模式，进行生效，默认为`vue`，支持模式为`'vue' | 'react' | 'normal'`

## 依赖项及版本号

| Package | Version |
| --- | --- |
| @stylistic/eslint-plugin | ^2.10.1 |
| @types/eslint-config-prettier | ^6.11.3 |
| @typescript-eslint/parser | ^8.14.0 |
| eslint-config-flat-gitignore | ^0.3.0 |
| eslint-config-prettier | ^9.1.0 |
| eslint-import-resolver-typescript | ^3.6.3 |
| eslint-plugin-import-x | ^4.4.2 |
| eslint-plugin-perfectionist | ^3.9.1 |
| eslint-plugin-prettier | ^5.2.1 |
| eslint-plugin-react | ^7.37.2 |
| eslint-plugin-react-hooks | ^5.1.0 |
| eslint-plugin-react-refresh | ^0.4.16 |
| eslint-plugin-unused-imports | ^4.1.4 |
| eslint-plugin-vue | ^9.31.0 |
| globals | ^15.13.0 |
| prettier | ^3.3.3 |
| typescript-eslint | ^8.14.0 |
| vue-eslint-parser | ^9.4.3 |

