module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'cypress'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'prefer-const': 'error', // Enforce use of const for variables
    'prefer-arrow-callback': 'error', // Prefer arrow functions
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-one-expression-per-line': 'off',
    "linebreak-style": "off",
    "no-param-reassign": "off",
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
