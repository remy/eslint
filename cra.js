module.exports = {
  extends: ['react-app'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: Object.assign(require('./common-rules'), {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  }),
};
