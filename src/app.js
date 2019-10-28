const http = require('http');
const chalk = require('chalk');
const conf = require('./config/index.js');
const router = require('./router/index.js');

const server = http.createServer(router);

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.info(`Server started at ${chalk.green(addr)}`);
})