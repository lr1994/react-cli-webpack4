const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            },{
                test:/\.less$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                },{
                    loader:'less-loader'
                }]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        extensions:['.js','.css','.json','.less'],
        alias:{
            src:path.join(__dirname,'../src'),
            views:path.join(__dirname,'../src/views')
        }
    },
    devServer:{
        historyApiFallback:true    
    }
});