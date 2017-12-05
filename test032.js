//fs文件系统
var fs = require('fs');
var file = 'input.txt';

//异步读取
fs.readFile(file, function(err, data){
	if(err) {
		return console.error(err);
	}
	console.log('异步读取:'+data.toString());
});

//同步读取
var data = fs.readFileSync(file);
console.log('同步读取:'+data.toString());

console.log('程序执行完毕');
