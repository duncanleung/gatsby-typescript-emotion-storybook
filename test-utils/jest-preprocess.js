// Set up Babel config
const babelOptions = {
  plugins: ['emotion'],
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
