const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const devMode = true
module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: ['./src/index.js'], // Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, '/build'), // Thư mục chứa file được build ra
        filename: 'bundle.js', // Tên file được build ra
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /(node_modules|bower_components)/, // Loại trừ thư mục node_modules
                use: ['babel-loader'],
            },
            {
                test: [/\.css$/, /\.s[ac]ss$/i], // Sử dụng style-loader, css-loader cho file .css
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            extensions: ['.wasm', '.mjs', '.js', '.json'],
        },
    },
}
