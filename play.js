const net = require('net');
const { MAX_IDLE_TIMEOUT } = require('../snek-multiplayer/src/constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.101',
    port: 50541
  });
  setTimeout(() => console.log("you ded cuz you idled"), MAX_IDLE_TIMEOUT)
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // console.log('you ded cuz you idled')
  // console.log(conn)
  return conn;
}
// console.log(net)
console.log('Connecting ...');
connect();
