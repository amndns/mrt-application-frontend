var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module:{
    rules:[{
        test: /\.jsx?$/,
        include:[path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname,"node_modules")],
        loader: "babel-loader"
    }]
  },
  devtool: "source-map",
  devServer: {
     contentBase: path.resolve(__dirname, 'dist'),
     publicPath: '/',
     port: 8080
  },
}
