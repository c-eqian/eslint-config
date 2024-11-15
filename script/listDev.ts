import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 读取 package.json 文件
const packageJsonPath = path.join(__dirname,'..', 'package.json');
const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));

// 提取 dependencies 和 devDependencies
const dependencies = packageJson.dependencies || {};
// const devDependencies = packageJson.devDependencies || {};

// 合并依赖项
const allDependencies = { ...dependencies };

// 创建表格数据
const tableData = [['Package', 'Version']];
for (const [name, version] of Object.entries(allDependencies)) {
    tableData.push([name, version as string]);
}

// 生成 Markdown 表格
const markdownTable = tableData.map(row => `| ${row.join(' | ')} |`).join('\n');
const headerSeparator = `| ${tableData[0].map(() => '---').join(' | ')} |`;

// 输出 Markdown 表格
console.log(markdownTable.split('\n').slice(0, 1).join('\n'));
console.log(headerSeparator);
console.log(markdownTable.split('\n').slice(1).join('\n'));
