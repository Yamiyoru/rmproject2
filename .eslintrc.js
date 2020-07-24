module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'space-before-blocks': 'off',
    'arrow-spacing': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'keyword-spacing': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    semi: 'off',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
    'comma-dangle': 'warn',
    'object-curly-spacing': 'warn',
    'comma-spacing': 'warn',
    'prefer-const': 'warn',
    'space-infix-ops': 'warn',
    'space-before-function-paren': 'warn',
    'prefer-destructuring': 'warn',
    'object-property-newline': 'warn',
    'block-spacing': 'warn',
    'arrow-body-style': 'warn',
    'no-unused-vars': 'warn',
    'padded-blocks': 'warn',
    'react/jsx-indent': 'warn',
    'react/jsx-tag-spacing': 'warn',
    quotes: 'warn',
    indent: 'warn',
  },
};
