import componentFile from './rules/component-name';
import noIndex from './rules/no-index-name';
export * from './constants'
export const rules = {
    'component-naming': componentFile,
    'no-index-naming': noIndex
};
const plugin = {
    meta: {
        name: 'eslint-plugin-file-naming',
        version: '1.0.0'
    },
    rules
};

export default plugin;
