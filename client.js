const net = require('net');
const { MAX_IDLE_TIMEOUT } = require('../snek-multiplayer/src/constants');

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.101',
    port: 50541
  });
  conn.on("connect", () => console.log("Successfully connected to game server")),
    setTimeout(() => console.log("you ded cuz you idled"), MAX_IDLE_TIMEOUT)
  conn.on('connect', () => {
    conn.write('Name: ABC');
    // setInterval(() => conn.write('Move: up'), 2000);
    // setTimeout(() => conn.write('Move: right'), 2000);
    // setTimeout(() => conn.write('Move: down'), 3000);
    // setTimeout(() => conn.write('Move: down'), 4000);
    // conn.write('Move: right');
    // conn.write('Move: down');
    // conn.write('Move: left');
  });
  // conn.on('connect', () => {
  // });
  conn.setEncoding('utf8');
  return conn;
}
module.exports = {
  connect
}; 