const path = require('path');

module.exports = {
  // bundling mode
  mode: 'development',

  // app entry file
  entry: './src/main.ts',

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
      }
    ]
  }
}