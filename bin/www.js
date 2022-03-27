const http = require('http');
const serverHandle = require('../app');

http.createServer(serverHandle).listen(8889, () => console.log('server run at http://localhost:8889'));