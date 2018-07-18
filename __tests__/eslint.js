const assert = require('assert');
const fs = require('fs');
const lib = require('../');
const CLIEngine = require('eslint').CLIEngine;
const text = fs.readFileSync(`${__dirname}/fixtures/frags.js`, 'utf8');

const lint = lib('next', {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
});

const cli = new CLIEngine({
  // ...lint,
  // envs: Object.keys(lint.env),
  // useEslintrc: false,
  globInputPaths: false,
  baseConfig: false,
  configFile: __dirname + '/../next.js',
});

// lint the supplied text and optionally set
// a filename that is displayed in the report
const report = cli.executeOnText(text, 'foo.js');

report.results.forEach(report =>
  report.messages.forEach(messages => console.log(messages.message))
);

assert(report.errorCount === 0);

// console.log(cli.getConfigForFile('myfile.js'));
