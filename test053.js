//timer.unref
var testFunction = function(){
	console.log('callback function executed.');
};
var timer = setInterval(testFunction, 3000);

//取消引用
timer.unref();
//恢复引用
timer.ref();


