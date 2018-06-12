const path = require('path');
const express = require('express');
const webpack = require('webpack');
const devConfig = require('./webpack.dev.js');
const middleWare = require('webpack-dev-middleware');
const compression = require('compression');
const hotware = require('webpack-hot-middleware');

devConfig.entry.app = ['webpack-hot-middleware/client',devConfig.entry.app];
const compile = webpack(devConfig);
const app = express();

const devMiddleware = middleWare(compile);
app.use(compression());
app.use(devMiddleware);
app.use(hotware(compile));


const mfs = devMiddleware.fileSystem;
const file = path.join(devConfig.output.path,'index.html');

//浏览器刷新404
app.get('*',(req,res) =>{
    // res.sendFile(path.resolve(__dirname,'../dist','index.html'));
    devMiddleware.waitUntilValid(() =>{
        const html = mfs.readFileSync(file);
        res.end(html);
    })
})

app.listen(6001,()=>{
    console.log('Example app listening on port 6001!');
});


