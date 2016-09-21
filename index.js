const fs = require('fs');
const autoPrefixer = require('autoprefixer');
const postcss = require('postcss');
const calc = require('postcss-calc');
const cssVariables = require('postcss-css-variables');
const atImport = require('postcss-import');
const immutableCss = require('immutable-css');
const reporter = require('postcss-reporter');

var css = fs.readFileSync('input.css', 'utf8');

postcss([
  atImport,
  cssVariables,
  calc,
  autoPrefixer,
  immutableCss({ strict: true }),
  reporter({ throwError: true })
])
  .process(css, { from: 'input.css' })
  .then(function (result) {
    var output = result.css
    console.log(output)
  });
