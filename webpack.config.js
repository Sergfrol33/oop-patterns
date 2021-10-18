const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
}