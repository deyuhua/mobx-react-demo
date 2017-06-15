/*
  webpack2 config for react mobx demo
*/

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        'react-hot-loader',
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.(es6|jsx?)$/,
                exclude: path.resolve(__dirname, "node_modules/"),
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ],
                    presets: [
                        [
                            "es2015", {
                                "modules": false
                            }
                        ],
                        'stage-0',
                        'react']
                }
            },
            {
                test: /\.(es6|jsx?)$/,
                include: path.resolve(__dirname, "src/"),
                loader: 'react-hot-loader/webpack'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            title: 'Mobx example'
        })
    ],
    devtool: "cheap-eval-source-map",
    devServer: {
        compress: true,
        hot: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/',
        port: 3000
    }
};
