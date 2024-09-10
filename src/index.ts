import http from 'node:http';
import { userRouter } from './routes/userRoutes';

const requestListener: http.RequestListener = (req, res) => {
  const url = req.url || '/';
  if (url == '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Welcome to time tracker api!');
  } else if (url.startsWith('/users')) {
    userRouter(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  }
};

const server = http.createServer(requestListener);
server.listen(5500, () => {
  console.log('running in http://localhost:5500');
});
