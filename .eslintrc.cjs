module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'public'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    semi: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'keyword-spacing': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/named': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    'import/no-duplicates': ['error'],
    'import/no-named-as-default': ['error'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': ['off'],
  },
};
