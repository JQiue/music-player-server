const url = require('url');
const songRouter = require('./src/router/song')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url == '/favicon.ico') {
    res.end('404')
    return;
  }
  const { query, pathname } = url.parse(req.url, true);
  req.query = query;
  req.pathname = pathname;
  const songResult = songRouter(req, res);
  if(songResult) {
    songResult.then(data => {
      console.log(data);
      if(data.type == 'json') {
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(JSON.stringify(data));
      }
    });
  } else {
    res.end('404');
  }
}
