const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const mime = require('../helper/mime');
const compress = require('../helper/compress');
const range = require('../helper/range');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req, res, config) {
  try {
    const filePath = path.join(config.root, req.url);
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const contentType = mime(filePath);
      res.setHeader('Content-Type', contentType);
      let rs;
      const {code, start, end} = range(stats.size, req, res);
      res.statusCode = code;
      if(code === 200) {
        rs = fs.createReadStream(filePath);
      } else {
        rs = fs.createReadStream(filePath,{start, end});
      }
      
      if(filePath.match(config.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const dir = path.relative(config.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files
      }

      res.end(template(data));
    }
  } catch (err) {
    console.error(err);
  }
}