var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'incharge.user.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({ 
        banner: `
// ==UserScript==
// @name         InCharge
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// @version      2
// ==/UserScript==
        `, 
        entryOnly: true,
        raw: true
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
