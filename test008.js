//EventEmitter类应用
var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listner1 = function listner1(){
	console.log('监听器listner1执行');
}

//监听器 #2
var listner2 = function listner2(){
	console.log('监听器listner2执行');
}

//绑定connection事件,处理函数为listner1
eventEmitter.addListener('connection', listner1);

//绑定connection事件,处理函数为listner2
eventEmitter.on('connection', listner2);

//类方法
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '监听器监听连接事件');

//处理/触发connection事件
eventEmitter.emit('connection');

//移除绑定的listner1函数
eventEmitter.removeListener('connection', listner1);
console.log('listner1 不再监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '监听器连接事件');
console.log('程序执行完毕');


