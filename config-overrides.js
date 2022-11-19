/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config) {
  const newConfig = config;
  const { resolve: { plugins = [] } = {} } = newConfig;
  plugins.push(new TsconfigPathsPlugin());
  return newConfig;
};

