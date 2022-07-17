const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // bundling mode
  mode: 'development',

  // app entry file
  entry: './src/main.ts',

  // Source map generation https://webpack.js.org/configuration/devtool/
  devtool: "source-map",

  // output bundle location
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },

  // file resolution
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typescript Boilerplate project',
      filename: 'index.html'
    })
  ]
}