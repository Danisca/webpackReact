const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimezerWebpackPlugin = require('css-minimizer-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(path.resolve(__dirname, 'src/components/'));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    resolve:{
        extensions: [ '.js', '.jsx' ],
        alias:{
            '@components': path.resolve(__dirname, '/src/components'),
            '@styles': path.resolve(__dirname, '/src/styles/'),
        }
    },
    mode: 'production',
    module:{
        rules:[
            //babel settings
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            //html-laoder
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            //css loaders
            {
                test:/\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html'),
            filename: 'index.html'
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimize: true,
        minimizer: [
            new cssMinimezerWebpackPlugin(),
            new terserWebpackPlugin()
        ]
    }

}