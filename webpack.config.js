var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: './main.js'
  },
  output: { 
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json'}
          ]
  },
  devServer: {
    historyApiFallback: true
  }
}