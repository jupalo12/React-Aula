const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    // mode:'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ]
    },
    plugins:[
        new HTMLWebPackPlugin({
            template:"./public/index.html",
            filename:"./public/index.html"
        })

    ]
}