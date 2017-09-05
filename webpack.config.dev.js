import { resolve } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseConfig from './webpack.config';

const port = process.env.PORT || 9000;
const publicPath = `http://localhost:${port}/`;

export default merge.smart(baseConfig, {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/dev.js'),
  ],

  output: {
    publicPath: `http://localhost:${port}//`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              // Here, we include babel plugins that are only required for the
              // renderer process. The 'transform-*' plugins must be included
              // before react-hot-loader/babel
              'transform-class-properties',
              'transform-es2015-classes',
              'react-hot-loader/babel'
            ],
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/dev.html'
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    }
  },
});
