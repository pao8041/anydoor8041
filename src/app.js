const http = require('http');
const chalk = require('chalk');
const conf = require('./config/index.js');
const router = require('./router/index.js');
const openUrl = require('./helper/openUrl');

class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }

  start() {
    const server = http.createServer((req, res) => router(req, res, this.conf));

    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`;
      console.info(`Server started at ${chalk.green(addr)}`);
      openUrl(addr);
    })
  }
}

module.exports = Server;