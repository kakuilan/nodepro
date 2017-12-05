//缓冲区比较
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result<0) {
	console.log(buffer1+'在'+buffer2+'之前');
}else if(result==0) {
	console.log(buffer1+'与'+buffer2+'相同');
}else{
	console.log(buffer1+'在'+buffer2+'之后');
}

//拷贝缓冲区
var buffer3 = new Buffer(3);
buffer1.copy(buffer3);
console.log('buffer3 content:'+ buffer3.toString());

//缓冲区裁剪
var buffer4 = buffer2.slice(0,2);
console.log('buffer2 content:'+ buffer4.toString());

//缓冲区长度
console.log('buffer lentth:' + buffer2.length);
