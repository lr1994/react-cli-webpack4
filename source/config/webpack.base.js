const path = require('path');
const rootpath = path.resolve(__dirname,'../');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:rootpath+'/src/index.js',
        react: ['react','react-router','react-dom']
    },
    output:{
        path:rootpath +'/dist',
        filename:'scripts/[name].[hash:8].bundle.js',
        // publicPath:'/'
        // publicPath:'file:///C:/coding/webpackprd/dist/'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/(mode_modules)/,
                use:"babel-loader"
            }
        ]
    },
    resolve:{
        extensions:['.js','.css','.json','.less'],
        alias:{
            src:path.join(__dirname,'../src'),
            views:path.join(__dirname,'../src/views'),
            css:path.join(__dirname,'../src/css')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'my website',
            filename:'index.html',
            template:path.resolve(__dirname,'index.html')
        })
    ]
};