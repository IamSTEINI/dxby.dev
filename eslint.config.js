import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import { ESLint } from "eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, 
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    extends: [
      "eslint:recommended", 
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended", 
      "plugin:prettier/recommended",
    ],
    rules: {
      // "react/react-in-jsx-scope": "off",
    },
  },
];
