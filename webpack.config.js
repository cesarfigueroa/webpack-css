var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var cssVariables = require('postcss-css-variables');
var immutableCss = require('immutable-css');
var reporter = require('postcss-reporter');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', [
          'css-loader', 'postcss-loader'
        ], { allChunks: true })
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, atImport, cssVariables];
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
