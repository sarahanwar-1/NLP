const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.js'), // Ensure this path is correct
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before building
  },
  mode: 'development', // Change to development mode
  devtool: 'eval-source-map', // Enable source maps for better debugging
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/views/index.html'), // Ensure this path is correct
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 3000, // Run the server on port 3000
    hot: true, // Enable hot module replacement
    open: true, // Open the browser after server start
  },
};

// Log the paths for debugging
console.log("Entry Path:", path.resolve(__dirname, 'src/client/index.js'));
console.log("Template Path:", path.resolve(__dirname, 'src/client/views/index.html'));
