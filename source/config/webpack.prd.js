const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// baseConfig.output.publicPath = 'file:///C:/coding/webpackprd/dist/';
module.exports = merge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },{
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].[hash:8].css")
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin()
        ]  //new UglifyJsPlugins()
    }
});