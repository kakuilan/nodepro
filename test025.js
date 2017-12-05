//routetest-index
var server = require('./test023');
var router = require('./test024');

server.start(router.route);
