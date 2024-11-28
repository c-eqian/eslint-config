// config/react.ts
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginReact from "eslint-plugin-react";
var reactConfig = [
  {
    name: "react-plugin",
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react": pluginReact
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      // 版本高于17，需要禁用
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  }
];
export {
  reactConfig
};
