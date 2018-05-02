const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD = path.resolve(__dirname, "build");

module.exports = {
    entry: './src/index.js',
    output: {
        path: BUILD,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,                
                use: ExtractTextPlugin.extract({ 
                    fallback:'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],
                })
            },
            {
                test: [
                    /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/
                ],
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            'build/static'
        ]),
        new ExtractTextPlugin({
            filename: 'bundle.css'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};