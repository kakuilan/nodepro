//删除文件
var fs = require('fs');
var fl = 'input.txt';

console.log('准备删除文件!');
fs.unlink(fl, function(err){
	if(err) return console.error(err);
	console.log('文件删除成功!');
});
