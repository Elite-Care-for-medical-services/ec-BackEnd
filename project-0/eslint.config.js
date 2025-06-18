// eslint.config.js
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginNode from "eslint-plugin-node";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    ignores: ["node_modules/", "dist/", "build/", "bun.lockb"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        console: "readonly",
        process: "readonly",
        module: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTS,
      import: eslintPluginImport,
      node: eslintPluginNode,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],

      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      "node/no-unsupported-features/es-syntax": "off",
      "node/no-missing-import": "off",
    },
  },
];
