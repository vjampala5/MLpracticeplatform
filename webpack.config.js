const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // Added

module.exports = {
  mode: 'development',
  entry: {
    main: './js/main.js',
//     compiler: './js/compiler.js',
//     dashboard: './js/dashboard.js',
//     login: './js/login.js',
//     logout: './js/logout.js',
//     problemData: './js/problemData.js',
//     problem: './js/problems.js',
//     signup: './js/signup.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // CSS files handling
        use: [
          MiniCssExtractPlugin.loader,  // Extracts CSS into separate file
          'css-loader',  // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    // HTML files generation
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './login.html',
      filename: 'login.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './problems.html',
      filename: 'problems.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    new HtmlWebpackPlugin({
        template: './compiler.html',
        filename: 'compiler.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './dashboard.html',
        filename: 'dashboard.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './logout.html',
        filename: 'logout.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './payment.html',
        filename: 'payment.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './signup.html',
        filename: 'signup.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './solve.html',
        filename: 'solve.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: './upgrade.html',
        filename: 'upgrade.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    // CSS extraction and minification
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',  // Output CSS file naming pattern
    }),
  ],
  optimization: {
    splitChunks: {
        chunks: 'all',  // This will split vendor libraries and shared code into separate chunks
        maxSize: 200000, // Set a maximum size for each chunk (in bytes)
    },
    minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),  // Minify CSS
    ],
  },
};
