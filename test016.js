//管道流
var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');
//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取intpu.txt内容,并写入output.txt
readerStream.pipe(writerStream);
console.log('程序执行完毕');


