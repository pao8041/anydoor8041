const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig.js');

const server = http.createServer((req, res) => {
   res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<b>Hello Http!</b> --')
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.info(`Server started at ${chalk.green(addr)}`);
})