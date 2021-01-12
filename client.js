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
  });
  conn.setEncoding('utf8');
  return conn;
}
module.exports = {
  connect
}; 