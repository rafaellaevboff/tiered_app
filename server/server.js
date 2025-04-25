const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, Node!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando em http://127.0.0.1:3000');
});