import { posix, sep } from 'node:path'
import { join } from "path";
import  type { Rule } from 'eslint'
// 系统驱动号匹配
export const WINDOWS_DRIVE_LETTER_REGEXP = /^[A-Za-z]:\//;
/**
 * 统一路径转换为posix模式
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => C:/Users/User/Documents/file.txt
 */
export const transformPathToPosix = (path:string)=> posix.normalize(path.split(sep).join(posix.sep));

/**
 * 通过完整路径获取文件名称
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => file.txt
 */
export const getFilenameByFullPath = (path:string): string => posix.basename(transformPathToPosix(path));

/**
 * 根据文件获取扩展名
 * @param path
 * @example
 * 'C:\\Users\\User\\Documents\\file.txt' => .txt
 * 'file.txt' => .txt
 */
export const getExtname = (path:string): string => {
    const name = getFilenameByFullPath(path)
    return name.substring(name.lastIndexOf('.'))
};

/**
 * 获取不带扩展名的文件名
 * @param path
 * @example
 * 'C:\\Users\\User\\Documents\\file.txt' => file
 */
export const getFilenameNotExt = (path:string)=> {
    const p= getFilenameByFullPath(path)
    return p.substring(0, p.lastIndexOf('.'));
}

/**
 * 从当前工作目录获取路径
 * @param fullPath
 * @param root
 */
export const getPathByRoot = (fullPath:string, root:string)=> {
    return fullPath.replace(join(root, sep), '');
}
/**
 * 删除系统上路径的驱动号
 * @param path
 * @example 'C:\\Users\\User\\Documents\\file.txt' => 'Users\\User\\Documents\\file.txt'
 */
export const removeDriveLetter = (path:string) => transformPathToPosix(path).replace(WINDOWS_DRIVE_LETTER_REGEXP, '');


/**
 * 获取当前文件路径，不包含系统驱动号
 * @param context
 */
export const getFullPath = (context: Rule.RuleContext) => removeDriveLetter(getPathByRoot(context.physicalFilename, context.cwd))
