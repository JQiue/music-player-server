const fs = require('fs');
const path = require('path');

const responseSong = (req, res, song) => {
  if(!song) {
    return Promise.resolve(false);
  }
  const filepath = path.resolve('./songs', song.path);
  const fileStat = fs.statSync(filepath);
  res.writeHead(200, {
    'Content-Type': 'application/binary',
    'Content-Length': fileStat.size,
    'Content-Disposition': `attachment; filename=${encodeURIComponent(path.basename(filepath))}`
  });
  const src = fs.createReadStream(filepath, {
    highWaterMark: 1024 * 12
  });
  src.on('data', chunk => {
    console.log(`Received ${chunk.length} bytes of data.`);
    let flag = res.write(chunk);
    if (!flag) {
      src.pause();
    }
  });

  res.on('drain', () => {
    console.log('drain');
    setTimeout(() => {
      src.resume();
    }, 1000);
  });
  src.on('end', () => {
    console.log('end');
    res.end();
  })
  return Promise.resolve(true);
}

module.exports = {
  responseSong
}