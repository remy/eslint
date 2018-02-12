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
module.exports = Object.assign({}, require('@remy/eslint/next'), {
  // overrides live here
});
```

## FAQ

<details><summary>Async functions are not supported yet on Node 4.0.0  node/no-unsupported-features</summary>
<br>
eslint is reading from the `package.json`, and the `engines.node` value is missing (assuming you want node@latest).

</details>

<details><summary>What are the optional dependencies?</summary><br>
  
```
npm i -D eslint@^4.17.0 babel-eslint@^7.2.3 eslint-config-react-app@^2.0.1 eslint-plugin-flowtype@^2.39.1 eslint-plugin-import@^2.8.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-node@^5.2.1 eslint-plugin-jest@^21.3.2
```
</details
