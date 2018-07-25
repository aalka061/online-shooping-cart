var webpack = require("webpack")
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output:{
        path:__dirname + "/",
        filename:"bundle.js",
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query:{
                    presets: ['react','es2015'],
                    plugins: ['transform-decorators-legacy']
                
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
    
            }
          

        ]
    },
    devServer: {
        historyApiFallback: true
    },
}