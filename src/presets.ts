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
    reactConfig,
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
export type Options = {
    mode?: 'vue' | 'react' | 'normal'
}
export function eslintPresets(config: Config | Config[] = [], options:Options = {mode:'vue'}): Config[] {
    const configs: Config[] = [...presetBasic]
    const { mode='vue' } = options ?? {} as Options
    if (mode==='vue'){
        configs.push(...vue)
    }else if(mode==='react'){
        configs.push(...reactConfig)
    }
    configs.push(...prettier)
    if (Object.keys(config).length > 0) {
        configs.push(...(Array.isArray(config) ? config : [config]))
    }
    return configs
}
