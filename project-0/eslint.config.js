/** @type {import("eslint").Linter.Config} */
export const root = true;
export const ignores = ["node_modules/", "dist/", "build/", "bun.lockb"];
export const parser = "@typescript-eslint/parser";
export const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
  project: ["./tsconfig.json"],
};
export const env = {
  node: true,
  es2021: true,
};
export const Extends = [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:node/recommended",
  "prettier",
];
export const plugins = ["@typescript-eslint", "import"];
export const rules = {
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
};
export const overrides = [
  {
    files: ["*.ts"],
    parserOptions: {
      project: ["./tsconfig.json"],
    },
  },
];
