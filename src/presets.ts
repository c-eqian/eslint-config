import {Linter} from "eslint";
import { Rules } from './typegen'
import {imports} from './config/imports'
import {javascript} from './config/javascript'
import {prettier} from './config/prettier'
import {typescript} from './config/typescript'
import {vue} from './config/vue'
import {ignores} from './config/ignores'
export type Config = Linter.Config<Linter.RulesRecord & Rules>
export const eslintPresets = (config: Config | Config[]):Config[]=> {
    const configs: Linter.Config[] = [
        ...prettier,
        ...imports,
        ...javascript,
        ...typescript,
        ...vue,
        ...ignores
    ]
    if (Object.keys(config).length > 0) {
        configs.push(...(Array.isArray(config) ? config : [config]))
    }
    return configs
}
