//写入文件
var fs = require('fs');
var fl = 'input.txt';

console.log('准备写入文件!');
fs.writeFile(fl, '这是通过写入的文件内容！', function(err){
	if(err) {
		return console.error(err);
	}

	console.log('数据写入成功!');
	console.log('----------分割线------------');
	console.log('读取写入的数据');
	fs.readFile(fl, function(err,data){
		if(err) {
			return console.error(err);
		}
		console.log('异步读取文件数据:'+ data.toString());
	});
});
