//console

//从第二个参数开始,依序输出所有字符串
console.log("%s", 'hoge', 'foo');

//将对象转化为字符串输出
console.log("%s", 'hoge', {foo:'Foo'});

//将数值转化为字符串输出
console.log("%d", 10, 10.5);

//将输出NaN
console.log("%d", 'hoge');

//输出百分号
console.log("%%", 'hoge');

console.log("2+2");
console.log(2/0);

var a = 1;
var b = 2;
console.log(a=b);

console.log(a+b);
console.log(a.toString()+ b.toString());

var a = 1;
var b = '2';
console.log(a+b);

console.error('this is an error.');
