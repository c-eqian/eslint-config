import {
    ignores,
    imports,
    javascript,
    prettier,
    sortImports,
    sortPackageJson,
    sortTsconfig,
    typescript,
    vue,
} from './config'
import type { Config } from './types'

export const presetJavaScript: Config[] = [
    ...ignores,
    ...javascript,
    ...imports,
]
export const presetJsonc: Config[] = [
    ...sortPackageJson,
    ...sortTsconfig,
]
export const presetLangsExtensions: Config[] = [
    ...presetJsonc,
]
export const presetBasic: Config[] = [
    ...presetJavaScript,
    ...typescript,
    ...sortImports,
]
export const presetAll: Config[] = [
    ...presetBasic,
    ...presetLangsExtensions,
    ...vue,
    ...prettier,
]
export { presetAll as all, presetBasic as basic }

export function eslintPresets(config: Config | Config[] = []): Config[] {
    const configs: Config[] = [...presetBasic]
    configs.push(...vue)
    configs.push(...prettier)
    if (Object.keys(config).length > 0) {
        configs.push(...(Array.isArray(config) ? config : [config]))
    }
    return configs
}
