import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { importX } from 'eslint-plugin-import-x'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig, globalIgnores } from 'eslint/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = defineConfig([
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.open-next/**',
  ]),

  {
    ...js.configs.recommended,
    ...importX.flatConfigs.recommended,
    ...importX.flatConfigs.typescript,
  },

  {
    files: ['src/app/**/*.{js,jsx,ts,tsx}', 'src/components/**/*.{js,jsx,ts,tsx}'],
    ignores: ['src/components/ui/*.{js,jsx,ts,tsx}'],
    ...perfectionist.configs['recommended-natural'],
  },

  {
    files: ['src/app/**/*.{js,jsx,ts,tsx}', 'src/components/**/*.{js,jsx,ts,tsx}'],
    ignores: ['src/components/ui/*.{js,jsx,ts,tsx}'],

    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      'import-x/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              from: ['src/app/**/page.tsx', 'src/app/**/layout.tsx'],
              target: ['**/*.{ts,tsx}'],
            },
          ],
        },
      ],
    },
  },

  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
    },
  },
  {
    ignores: ['.next/'],
  },
])

export default eslintConfig
