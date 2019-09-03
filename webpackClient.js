const webpackBase = require('./webpackBase');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
module.exports = merge(webpackBase, {
  entry: {
    client: './vue/entry-client.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new VueSSRClientPlugin(),
  ],
});
