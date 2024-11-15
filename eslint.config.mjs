
import { eslintPresets } from './src'
import * as pluginImport from "eslint-plugin-import-x";
export default eslintPresets([
    {
        ...pluginImport.configs.typescript,
        name: 'eqian/pluginImport'
    },
    {
        ignores: ["eslint.config.mjs"]
    },
]);

