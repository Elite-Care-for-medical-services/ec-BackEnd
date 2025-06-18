// eslint.config.js
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginSecurity from "eslint-plugin-security";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";

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
      security: eslintPluginSecurity,
      "@stylistic": eslintPluginStylistic,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Best practices
      "no-console": "warn",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // Import order
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      // Prettier
      "prettier/prettier": "warn",
    },
  },
];
