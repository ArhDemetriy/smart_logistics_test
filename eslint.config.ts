import { tanstackConfig } from '@tanstack/eslint-config'

export default tanstackConfig.concat(
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
      'import/consistent-type-specifier-style': 'off',
    },
  },
  {
    ignores: ['eslint.config.ts', 'prettier.config.ts', './**/*.gen.ts'],
  }
)
