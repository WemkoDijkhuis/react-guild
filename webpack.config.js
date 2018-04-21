var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  devtool:'cheap-module-eval-source-map',
  entry: {
    pages: __dirname +'/app/src/router.js',
    vendors:['react','react-dom','react-router']
  },
  output: {
    publicPath: 'dist',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }},
          {loader: 'sass-loader'}
        ]
      },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader', query: {
        presets: ['es2015', 'react']
      } },
      {
        test: /favicon\.ico$/,
        loader: 'file-loader?name=favicon.ico'
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=/img/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendors.js'}),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080/' }),
    new HtmlWebpackPlugin({favicon: 'public/favicon.ico'})
  ]
};
