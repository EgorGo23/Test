const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelOptions = (preset) => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css'],
  },
  devServer: {
    historyApiFallback: true,
    port: 4200,
  },
  devtool: '',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }, 
        ],
      },
      {
        test: /\.png$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/public/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles_bundle.css',
    }),
  ],
};
