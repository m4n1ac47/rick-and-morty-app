import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import simpleImportSort from "eslint-plugin-simple-import-sort"

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig
    ],
    rules: {
      'prettier/prettier': ['error'],
      "simple-import-sort/imports": ["error", {
        groups: [
          // React
          ['^react$'],
          // npm packages
          ['^(?!@(assets|components|utils)(/|$))@?\\w'],
          // aliases
          ['^@(assets|components|utils)(/|$)'],
          // relative imports
          ['^\\.(?!.*\\.css$)'],
          // styles
          ['^.*\\.module\\.css$'],
          ['^.*\\.css$'],
        ]}
      ],
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
