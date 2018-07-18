#!/usr/bin/env node

console.log(`module.exports = require('@remy/eslint')('${process.argv[2] ||
  'next'}', {
  // overrides live here
});`);
