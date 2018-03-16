const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: 9001,
  host: 'localhost',
});

server.route(Routes);

if (!module.parent) {
  server.start((error) => {
    if (error) {
      throw (error);
    }
    console.log('Server started at port 9001');
  });
}
module.exports = server;
