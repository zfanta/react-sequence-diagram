import {resolve} from 'path';
import webpack from 'webpack';

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
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      Raphael: 'raphael'
    })
  ]
};
