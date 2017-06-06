const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    './src/index.jsx',
  ],

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devServer: {
    inline: true,
    port: 8000,
  },

  plugins: [HTMLWebpackPluginConfig],
}
