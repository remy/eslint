# @remy/eslint

My shared (and personal) eslint configurations for different projects.

Currently supporting:

* node (node)
* jest (jest)
* next.js (next)
* create-react-app (cra)

## Usage

Add `.eslintrc.js` to the root of the project, and with `npm i -D @remy/eslint`,
add the following code:

```js
module.exports = require('@remy/eslint')('next', {
  // overrides live here
});
```

For example, to allow `console.log`:

```js
module.exports = require('@remy/eslint')('next', {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
});
```

## FAQ

### Async functions are not supported yet on Node 4.0.0  node/no-unsupported-features

eslint is reading from the `package.json`, and the `engines.node` value is missing (assuming you want node@latest).
