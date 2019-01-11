const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const dir = {
  STATIC: path.resolve(__dirname, '../static'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '..')
};

module.exports = {
  entry: dir.ROOT,
  output: {
    path: dir.DIST,
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
        // pathRewrite: { '^/api': '' }
      }
    },
    contentBase: dir.STATIC,
    hot: true,
    compress: true, // enable gzip compression
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}), // Keep this in the top of the array
    new BundleAnalyzerPlugin({ openAnalyzer: false })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: { loader: 'babel-loader' }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  }
};
