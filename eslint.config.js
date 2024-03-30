import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    ignores: ['node_modules/**'],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['js/**/.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
  },
];
