import {resolve} from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'lib')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },
};
