const assert = require('assert');
const lib = require('../');

const plain = lib('next');

const lint = lib('next', {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
});

const length = o => Object.keys(o).length;

assert(length(plain.rules) == 2, JSON.stringify(plain.rules));
assert(length(lint.rules), 3);
