//dns模块
var dns = require('dns');
dns.lookup('www.github.com', function onLookup(err,address,family){
	console.log('ip address:', address);
	dns.reverse(address, function(err,hostnames){
		if(err) return console.log(err.stack);
		console.log('反向解析 '+address+':'+JSON.stringify(hostnames));
	});
});
