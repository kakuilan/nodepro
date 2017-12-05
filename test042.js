//OS模块
var os = require('os');
console.dir(os);

//cpu字节序
console.log('endianness:'+ os.endianness());
//操作系统
console.log('type:'+ os.type());
//操作系统
console.log('platform:'+ os.platform());
//系统内存总量
console.log('total memory:'+ os.totalmem() + 'bytes.');
//空闲内存量
console.log('free memory:'+ os.freemem()+ 'bytes.');

