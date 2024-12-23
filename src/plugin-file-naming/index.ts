import componentFile from "./rules/component-naming";
import folderNaming from "./rules/folder-naming";
import noIndex from "./rules/no-index-naming";
import filename from "./rules/filename-naming";
export * from "./constants";
export const rules = {
  "folder-naming": folderNaming,
  "component-naming": componentFile,
  "filename-naming": filename,
  "no-index-naming": noIndex,
};
const plugin = {
  meta: {
    name: "eslint-plugin-file-naming",
    version: "1.0.4",
  },
  rules,
};

export default plugin;
