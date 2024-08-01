module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".vue", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".vue", ".js", ".ts", ".scss", ".d.ts"],
        map: [
          ["@/components", "./src/components"],
          ["@/pages", "./src/pages"],
          ["@/router", "./src/router"],
          ["@/store", "./src/store"],
          ["@/styles", "./src/styles"],
          ["@/types", "./src/types"],
          ["@/utils", "./src/utils"],
        ],
      },
    },
  },
}
