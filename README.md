# @remy/eslint

My shared (and personal) eslint configurations for different projects.

Currently supporting:

* node
* jest
* next.js
* create-react-app

## Usage

Add `.eslintrc.js` to the root of the project, and with `npm i -D @remy/eslint`,
add the following code:

```js
module.exports = Object.assign(require('@remy/eslint/next'), {
  // overrides live here
});
```
