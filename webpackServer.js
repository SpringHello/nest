const webpackBase = require('./webpackBase');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge(webpackBase, {
  entry: {
    server: './vue/entry-server.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new VueSSRServerPlugin(),
  ],
});
