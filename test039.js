//创建目录
var fs = require('fs');
var dr = '/tmp/test';

console.log('创建目录'+dr);
fs.mkdir(dr, function(err){
	if(err) return console.error(err);
	console.log('目录创建成功!');
});

//读取目录
console.log('查看/tmp目录');
fs.readdir('/tmp/', function(err, files){
	if(err) return console.error(err);
	files.forEach(function(file){
		console.log('file:'+ file);
	});
});

//删除目录
console.log('准备删除目录'+dr);
fs.rmdir(dr, function(err){
	if(err) return console.error(err);
	console.log('删除成功'+dr);
});
