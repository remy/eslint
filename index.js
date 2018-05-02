const merge = require('lodash.merge');
const valid = ['cra', 'next', 'node', 'jest'];

module.exports = (mod, options) => {
  if (valid.indexOf(mod) === -1) {
    throw new Error(`Unknown module "${mod}" - cannot load lint config`);
  }

  const config = require(`./${mod}`);

  return merge({}, config, options || {});
};
