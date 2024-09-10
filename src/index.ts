import http from 'node:http';

const requestListener: http.RequestListener = (_req, response) => {
  response.end('Hola Codeable');
};

const server = http.createServer(requestListener);
server.listen(5500);
