const path = require('path');
const webpack = require('webpack');


const dir = {
  STATIC: path.resolve(__dirname, '../static'),
  DIST: path.resolve(__dirname, '../static'),
  ROOT: path.resolve(__dirname, '..')
};

module.exports = {
  entry: dir.ROOT,
  output: {
    path: dir.DIST,
    filename: 'bundle.js'
  },
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({}) // Keep this in the top of the array
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
