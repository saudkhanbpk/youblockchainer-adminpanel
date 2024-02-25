var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router(require('./db.js')());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const serverA = server.listen(0, () => {
  console.log('App listening at ', serverA.address().port);
});
