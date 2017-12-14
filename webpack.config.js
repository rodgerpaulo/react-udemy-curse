const webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: './bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './public'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}

