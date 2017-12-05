//截取文件
var fs = require('fs');
var fl = 'input.txt';
var buf = new Buffer(1024);

console.log('准备打开文件');
fs.open(fl, 'r+', function(err,fd){
	if(err) return console.error(err);

	console.log('文件打开成功');
	console.log('截取10字节后的文件内容');

	//截取
	fs.ftruncate(fd, 10, function(err){
		if(err) return console.error(err);
		console.log('文件截取成功');
		console.log('读取相同的文件');
		
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if(err) return console.error(err);
			if(bytes>0) {
				console.log(buf.slice(0,bytes).toString());
			}
			
			fs.close(fd, function(err){
				if(err) return console.error(err);
				console.log('文件关闭成功!');
				
			});
		});
		
	});
});
