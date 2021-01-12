const net = require('net');
const { MAX_IDLE_TIMEOUT } = require('../snek-multiplayer/src/constants');

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.101',
    port: 50541
  });
  setTimeout(() => console.log("you ded cuz you idled"), MAX_IDLE_TIMEOUT)
  conn.setEncoding('utf8');
  return conn;
}
module.exports = {
  connect
}; 