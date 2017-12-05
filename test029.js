//常用工具util

var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello '+this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = 'sub';
}

//Sub继承Base
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);



