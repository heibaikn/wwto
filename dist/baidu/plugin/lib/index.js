import wx from './../../adaptor.js';
const fs=require("fs"),sysPath=require("path"),gulp=require("gulp"),str2ab=require("to-buffer"),through2=require("through2"),ab2str=require("arraybuffer-to-string"),babel=require("@babel/core"),extraPluginCom=require("./utils/extra-plugin-com");let pluginInfo;function getPluginInfo(e,r){return pluginInfo?r():extraPluginCom(`${e}/plugins`,e=>{r(pluginInfo=e)})}function convertPlugin(e){const r=e.source||"./src";getPluginInfo(r,e=>{const n=[`${r}/**/*.json`];gulp.src(n).pipe(through2.obj(function(r,n,t){const o=r.history[0].replace(r.base,"").split(sysPath.sep),l=new Array(o.length).fill("..").join("/").replace(/^\.\./,".");let s=ab2str(r.contents);s=s.replace(/plugin:\/\/(\w+)\/(\w+)/g,(r,n,t)=>{const o=e.coms[n]||{};return`${l}/plugins/${n}/${o[t]}`}),r.contents=str2ab(s),this.push(r),t()})).pipe(gulp.dest(r))})}function convertCaller(e){const r=e.source||"./src";getPluginInfo(r,e=>{gulp.src(`${r}/**/*.js`).pipe(through2.obj(function(r,n,t){const o=r.history[0].replace(r.base,"").split(sysPath.sep),l=new Array(o.length).fill("..").join("/").replace(/^\.\./,".");let s=ab2str(r.contents);s=s.replace(/requirePlugin\(['"](\w+)['"]\)/g,(r,n)=>r.replace("requirePlugin","require").replace(n,`${l}/plugins/${n}/${e.main[n]}`)),s=babel.transform(s,{plugins:["@babel/plugin-transform-modules-commonjs"]}).code,r.contents=str2ab(s),this.push(r),t()})).pipe(gulp.dest(r))})}function convert(e={}){convertPlugin(e),convertCaller(e)}module.exports={convert:convert,convertPlugin:convertPlugin,convertCaller:convertCaller};