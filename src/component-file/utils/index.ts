import { posix, sep } from "node:path";
import { join } from "path";
import micromatch from "micromatch";
import type { Rule } from "eslint";
// 系统驱动号匹配
export const WINDOWS_DRIVE_LETTER_REGEXP = /^[A-Za-z]:\//;
/**
 * 统一路径转换为posix模式
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => C:/Users/User/Documents/file.txt
 */
export const transformPathToPosix = (path: string) =>
  posix.normalize(path.split(sep).join(posix.sep));

/**
 * 通过完整路径获取文件名称
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => file.txt
 */
export const getFilenameByFullPath = (path: string): string =>
  posix.basename(transformPathToPosix(path));

/**
 * 根据文件获取扩展名
 * @param path
 * @example
 * 'C:\\Users\\User\\Documents\\file.txt' => .txt
 * 'file.txt' => .txt
 */
export const getExtname = (path: string): string => {
  const name = getFilenameByFullPath(path);
  return name.substring(name.lastIndexOf("."));
};

/**
 * 获取不带扩展名的文件名
 * @param path
 * @example
 * 'C:\\Users\\User\\Documents\\file.txt' => file
 */
export const getFilenameNotExt = (path: string) => {
  const p = getFilenameByFullPath(path);
  return p.substring(0, p.lastIndexOf("."));
};

/**
 * 从当前工作目录获取路径
 * @param fullPath
 * @param root
 */
export const getPathByRoot = (fullPath: string, root: string) => {
  return fullPath.replace(join(root, sep), "");
};
/**
 * 删除系统上路径的驱动号
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => 'Users\\User\\Documents\\file.txt'
 */
export const removeDriveLetter = (path: string) =>
  transformPathToPosix(path).replace(WINDOWS_DRIVE_LETTER_REGEXP, "");

/**
 * 获取当前文件路径，不包含系统驱动号
 * @param context
 */
export const getFullPath = (context: Rule.RuleContext) =>
  removeDriveLetter(getPathByRoot(context.physicalFilename, context.cwd));
/**
 * 获取最后文件夹名称
 * @param path
 * @example
 * 'repos/vue-t/tests/views/index'=> 'index'
 */
export const getLastSubPath = (path: string) =>
  path.substring(path.lastIndexOf(posix.sep) + 1);

/**
 * 获取文件夹
 * @param path
 * @example
 * 'C:\\Users\\User\\Documents\\file.txt' => C:\\Users\\User\\Documents
 */
export const getFolderPath = (path: string) => {
  if (micromatch.isMatch(path, "**/*.*")) {
    return posix.join(posix.dirname(path), posix.sep);
  }
  return path;
};

/**
 * 获取文件夹名称
 * @example
 * Users\\User\\Documents\\ => [Users, User, Documents]
 */
export const getChunkFolder = (path: string) => {
  return path.split(posix.sep).filter((p) => !isEmpty(p));
};

/**
 * 检测一个值是否为 undefined、null、NAN
 * @param value
 */
export const isNil = (value: unknown) =>
  value === undefined || value === null || Number.isNaN(value);
/**
 * 是否为数组
 * @param value
 */
export const isArray = (value: unknown): value is Array<any> =>
  Array.isArray(value);
/**
 * 值是否为一个对象
 * @param value
 */
export const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === "[object Object]";
/**
 * 是否为空
 * @param value
 */
export const isEmpty = (value: unknown): boolean => {
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Reflect.ownKeys(value).length === 0;
  return value === "" || isNil(value);
};
/**
 * 获取文件夹的子文件夹
 * @param path
 * @example
 * repos/vue-t/tests/views/index/home.vue
 * [
 *   'repos',
 *   'repos/vue-t',
 *   'repos/vue-t/tests',
 *   'repos/vue-t/tests/views',
 *   'repos/vue-t/tests/views/index',
 *   'repos/vue-t/tests/views/index/home.vue'
 * ]
 */
export const getAllSubPaths = (path: string): string[] => {
  const separator = posix.sep;
  const parts = path.split(separator).filter((p) => !isEmpty(p));
  const result: string[] = [];

  // 递归生成所有子路径
  const generatePaths = (currentIndex: number): void => {
    if (currentIndex <= parts.length) {
      const subPath = parts.slice(0, currentIndex).join(separator);
      if (subPath) {
        result.push(subPath);
      }
      if (currentIndex < parts.length) {
        generatePaths(currentIndex + 1);
      }
    }
  };

  generatePaths(1); // 从第一个子目录开始生成（排除根目录）
  result.sort(); // 排序
  return [
    ...new Set(result.map((p) => (p.endsWith(separator) ? p.slice(0, -1) : p))),
  ];
};
