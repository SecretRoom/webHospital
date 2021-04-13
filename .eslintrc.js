module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-shadow': 0,
    'no-unused-vars': ['error', { args: 'none' }],
    'no-underscore-dangle': 0,
    'no-use-before-define': ['warn'],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'linebreak-style': 0,
    'max-len': ['error', 150],
    camelcase: ['warn'],
    'arrow-parens': 'off', // Несовместимо с prettier
    'object-curly-newline': 'off', // Несовместимо с prettier
    'no-mixed-operators': 'off', // Несовместимо с prettier
    'function-paren-newline': 'off', // Несовместимо с prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Несовместимо с prettier
    'no-console': 'error', // airbnb использует предупреждение
    'no-alert': 'error', // airbnb использует предупреждение
    'react/jsx-curly-newline': 'off',
    radix: 'off', // parseInt, parseFloat и radix выключены. Мне это не нравится.
    semi: 'off',
    // 'consistent-return': ['error', { treatUndefinedAsUnspecified: true }]
  },
};
