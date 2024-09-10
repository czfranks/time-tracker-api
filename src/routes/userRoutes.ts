import { IncomingMessage, ServerResponse } from 'http';
import {
  createUserController,
  getUsersController,
} from '../controllers/userController';

export const userRouter = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/users' && req.method === 'GET') {
    getUsersController(req, res);
  } else if (req.url === '/users' && req.method === 'POST') {
    createUserController(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Users: Not Found');
  }
};
