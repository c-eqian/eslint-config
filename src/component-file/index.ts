import componentFile from './rules/component-naming';
import noIndex from './rules/no-index-naming';
import folderNaming from './rules/folder-naming';
export * from './constants'
export const rules = {
    'folder-naming': folderNaming,
    'component-naming': componentFile,
    'no-index-naming': noIndex
};
const plugin = {
    meta: {
        name: 'eslint-plugin-file-naming',
        version: '1.0.3'
    },
    rules
};

export default plugin;
