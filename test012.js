//将buffer转换为JSON对象
var buf1 = new Buffer('www.baidu.com');
var json = buf1.toJSON(buf1);
console.log(json);

//缓冲区合并,返回一个多个成员合并的新Buffer对象
var buffer1 = new Buffer('hello');
var buffer2 = new Buffer('www.baidu.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3内容:' +  buffer3.toString());


