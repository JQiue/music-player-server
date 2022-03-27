const {
  getSongList,
  getSongFile
} = require('../controller/song');

module.exports = (req, res) => {
  if (req.method == 'GET' && req.pathname == '/api/song/list') {
    return getSongList().then(result => {
      return {
        type: 'json',
        code: 1,
        data: result
      };
    });
  }
  if (req.method == 'GET' && req.pathname == '/api/song/get') {
    return getSongFile(req, res).then(result => {
      return {
        type: 'binary',
        code: 1,
        data: result
      }
    });
  }
}