//使用require.resolve函数查询完整模块名
var mod = require('./hello');

var m = require.resolve('./hello.js');
console.log(m);

//require.cache对象
console.log(require.cache);

console.log(require.cache[require.resolve('./hello')]);

