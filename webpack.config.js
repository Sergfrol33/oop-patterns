const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: true,
    },
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s[ac])ss$/i,
                use: ['css-loader','postcss-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        })
    ],
}