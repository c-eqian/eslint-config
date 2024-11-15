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
    ...sortImports,
    ...typescript
]
export const presetAll: Config[] = [
    ...presetBasic,
    ...presetLangsExtensions,
    ...prettier,
    ...vue
]
export { presetAll as all, presetBasic as basic }

export function eslintPresets(config: Config | Config[] = [], options:{
    vue: boolean,
} = {vue:true}): Config[] {
    const configs: Config[] = [...presetBasic]
    if (options.vue){
        configs.push(...vue)
    }
    configs.push(...prettier)
    if (Object.keys(config).length > 0) {
        configs.push(...(Array.isArray(config) ? config : [config]))
    }
    return configs
}
