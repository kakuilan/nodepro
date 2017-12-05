//util.isArray
var util = require('util');

console.log('isArray:');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

//isRegExp
console.log('isRegExp:');
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));

//isDate
console.log('isDate:');
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log({});

//isError
console.log('isError:');
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name:'Error',message:'an error occurred'}));

