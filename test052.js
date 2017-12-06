//time,timeEnd
console.time('small loop');
for(var i=0;i<10000;i++) {
	;
}
console.timeEnd('small loop');

//trace
var user = new Object();
user.name = 'Luluhai';
user.getName = function(){return this.name};
user.setName = function(name){this.name=name};
console.trace('trace');

//assert
console.assert(1==22, 'raise an exception');
