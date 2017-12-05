//path模块
var path = require('path');

//格式化路径
console.log('normalization:'+ path.normalize('/test/test1//2slashes/1slash/tab/..'));

//连接路径
console.log('joint path:'+ path.join('/test','test1','2slash/hah','tab','..'));
//转为绝对路径
console.log('resolve:'+ path.resolve('test033.js'));
//路径中,文件的后缀名
console.log('ext name:'+path.extname('test033.js'));
