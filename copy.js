#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const srcpath = path.resolve(__dirname,'./source');
const res = process.argv[2];
const distpath = path.resolve(res);
const appName = path.basename(distpath);
const stat = fs.stat;

const copy = (src,dst) =>{
    //读取目录
    fs.readdir(src,(err,paths) =>{
        console.log(paths);
        if(err){
            throw err;
        }
        paths.forEach((path)=>{
            const _src = src + '/' + path;
            const _dst = dst + '/' + path;
            let readable,writable;
            stat(_src,(err,st) =>{
                if(err){
                    throw err;
                }
                if(st.isFile()){
                    readable = fs.createReadStream(_src);//创建读取流
                    writable = fs.createWriteStream(_dst);//创建写入流
                }else if(st.isDirectory()){
                    exists(_src,_dst,copy);
                }
            })
        });
    });
}

const exists = (src,dst,callback)=>{
    fs.exists(dst,(exists)=>{
        if(exists){
            callback(src,dst);
        }else{
            fs.mkdir(dst,()=>{
                callback(src,dst)
            })
        }
    });
}

exists(srcpath,appName,copy);