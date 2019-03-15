const assert = require('assert');
const lib = require('../');

const plain = lib('next');

const mod = {
  rules: {
    'no-console': ['error', { allow: ['none'] }],
  },
  plugins: ['foo'],
};

const lint = lib('next', mod);

const length = o => Object.keys(o).length;

assert(length(plain.rules) == 6, JSON.stringify(plain.rules, 0, 2));
assert(length(lint.rules) === 7);
assert(lint.plugins.length === 2);
