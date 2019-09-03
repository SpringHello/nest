const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', 'vue'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              include: [resolve('vue')],
            },
          },
        ],
      },
    ],
  },
};
