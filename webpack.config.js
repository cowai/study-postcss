'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

var env = process.env.NODE_ENV;

var config = {
  entry: {
    style: path.join(__dirname, 'src/scss/main.scss')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].css'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({
          browsers: ['IE 11', 'last 2 versions']
        }), precss]
      }
    })
  ]
};

module.exports = config;