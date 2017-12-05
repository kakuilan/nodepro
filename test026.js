//全局对象

//输出全局变量 __filename
console.log(__filename);

console.log(__dirname);

function printHello(){
	console.log("Hello, World!");
}
setTimeout(printHello, 2000);

var t = setTimeout(printHello, 1000);
//清除定时器
clearTimeout(t);

setInterval(printHello, 1000);

//console对象
//console.info('hehe', global);
console.error("has an error!");
console.warn("has a warning");
//console.dir(global);
console.time();
console.trace();

console.info('程序开始执行:');
console.time('获取数据');
var counter = 10;
console.log("计数:%d", counter);
console.timeEnd('获取数据');
console.info('程序执行完毕');



