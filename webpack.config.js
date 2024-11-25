const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js', // Use contenthash for better caching
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Split all chunks
    },
    runtimeChunk: 'single', // Create a runtime file to be shared for all generated chunks
    usedExports: true, // Enable tree shaking
  },
};
