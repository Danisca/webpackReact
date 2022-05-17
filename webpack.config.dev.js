const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions: [ '.js', '.jsx' ],
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        }
    },
    mode: 'development',
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
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000
    }

}