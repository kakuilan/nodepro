//获取文件信息
var fs = require('fs');
var fl = 'input.txt';

console.log('准备打开文件!');
fs.stat(fl, function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log('读取文件信息成功');

	//检查文件类型
	console.log('是否为文件isFile?'+ stats.isFile());
	console.log('是否为文件isDirectory?'+ stats.isDirectory());
});
