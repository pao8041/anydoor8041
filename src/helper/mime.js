const path = require('path');

const mimeTypes = {
  'ai': 'application/postscript',

  'eps': 'application/postscript',

  'exe': 'application/octet-stream',

  'doc': 'application/vnd.ms-word',

  'xls': 'application/vnd.ms-excel',

  'ppt': 'application/vnd.ms-powerpoint',

  'pps': 'application/vnd.ms-powerpoint',

  'pdf': 'application/pdf',

  'xml': 'application/xml',

  'odt': 'application/vnd.oasis.opendocument.text',

  'swf': 'application/x-shockwave-flash',

  'gz': 'application/x-gzip',

  'tgz': 'application/x-gzip',

  'bz': 'application/x-bzip2',

  'bz2': 'application/x-bzip2',

  'tbz': 'application/x-bzip2',

  'zip': 'application/zip',

  'rar': 'application/x-rar',

  'tar': 'application/x-tar',

  '7z': 'application/x-7z-compressed',

  'txt': 'text/plain',

  'php': 'text/x-php',

  'html': 'text/html',

  'htm': 'text/html',

  'js': 'text/javascript',

  'css': 'text/css',

  'rtf': 'text/rtf',

  'rtfd': 'text/rtfd',

  'py': 'text/x-python',

  'java': 'text/x-java-source',

  'rb': 'text/x-ruby',

  'sh': 'text/x-shellscript',

  'pl': 'text/x-perl',

  'sql': 'text/x-sql',
  'bmp': 'image/x-ms-bmp',

  'jpg': 'image/jpeg',

  'jpeg': 'image/jpeg',

  'gif': 'image/gif',

  'png': 'image/png',

  'tif': 'image/tiff',

  'tiff': 'image/tiff',

  'tga': 'image/x-targa',

  'psd': 'image/vnd.adobe.photoshop',

  'mp3': 'audio/mpeg',

  'mid': 'audio/midi',

  'ogg': 'audio/ogg',

  'mp4a': 'audio/mp4',

  'wav': 'audio/wav',

  'wma': 'audio/x-ms-wma',

  'avi': 'video/x-msvideo',

  'dv': 'video/x-dv',

  'mp4': 'video/mp4',

  'mpeg': 'video/mpeg',

  'mpg': 'video/mpeg',

  'mov': 'video/quicktime',

  'wm': 'video/x-ms-wmv',

  'flv': 'video/x-flv',

  'mkv': 'video/x-matroska'
};

module.exports = function (filePath) {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();

  if (!ext) {
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes['txt'];
}