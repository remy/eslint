module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  env: {
    jest: true,
  },
  rules: Object.assign(require('./common-rules'), { 'no-console': 0 }),
};
