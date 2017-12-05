//解码缓冲区数据并使用指定的编码返回字符串
buf = new Buffer(26);
for (var i=0;i<26;i++) {
	buf[i]= i +97;
}

console.log(buf.toString('ascii')); //out abc...
console.log(buf.toString('ascii',0, 5)); //out abcde
console.log(buf.toString('utf8', 0, 5)); //out abcde
console.log(buf.toString(undefined, 0, 5)); //使用utf8,
