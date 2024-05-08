import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import html from "@html-eslint/eslint-plugin";
import parser from "@html-eslint/parser";


export default [
  {
    rules: {
        semi: "error",
        "prefer-const": "error"
    }
},
{
  rules: {
      semi: "error",
      "prefer-const": "error"
  }
},
{
  rules: {
      semi: "error",
      "prefer-const": "error"
  }
},
{
  rules: {
      semi: "error"
  }
},
html.configs["flat/recommended"],
{
  files: ["**/*.html"],
  plugins: {
    "@html-eslint": html,
  },
  languageOptions: {
    parser,
  },
  rules: {
    "@html-eslint/indent": "error",
  },
},

  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];