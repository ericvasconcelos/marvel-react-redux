const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractCSS = new ExtractTextPlugin('app.css');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: '/node_modules',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    },
    {
      test: /\.[s]?css$/,
      exclude: '/node_modules',
      loader: extractCSS.extract(['css','sass'])
    },
    {
      test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
      loader: 'file' 
    }]
  }
}