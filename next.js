module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: Object.assign(require('./common-rules'), {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'react/jsx-no-undef': 'error',
  }),
};
