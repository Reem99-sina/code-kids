import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginObject from "eslint-plugin-import"




/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {plugins:{import: pluginObject}},
  {
    rules: {
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-var-requires": "off",
      // add new line above comment
      "lines-around-comment": [
        "off",
        {
          "beforeLineComment": true,
          "beforeBlockComment": true,
          "allowBlockStart": true,
          "allowClassStart": true,
          "allowObjectStart": true,
          "allowArrayStart": true
        }
      ],
      // add new line above return
      "newline-before-return": "error",
      // add new line below import
      "import/newline-after-import": [
        "error",
        {
          "count": 1
        }
      ],
       "react/react-in-jsx-scope": "off",
      "no-console": ["warn", { "allow": ["info", "warn", "error"] }]

    },
    settings: {
      react: {
        version: "19.0.0", // Or specify your React version (e.g., "18.0")
      },
    },
  },

];