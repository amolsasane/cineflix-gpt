import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the react version
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      // Add any additional rules or override default recommended rules here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
