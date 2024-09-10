import { IncomingMessage, ServerResponse } from 'http';
import { createUser, getUsers } from '../models/userModel';

export const getUsersController = (
  _req: IncomingMessage,
  res: ServerResponse
) => {
  (async () => {
    try {
      const users = await getUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const content = {
        status: 200,
        message: 'get Users',
        data: users,
      };
      res.end(JSON.stringify(content));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: (err as Error).message }));
    }
  })();
};

export const createUserController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    try {
      const userBody = JSON.parse(body);
      const user = await createUser(userBody);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const content = {
        status: 200,
        message: 'create User',
        data: user,
      };
      res.end(JSON.stringify(content));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: (err as Error).message }));
    }
  });
};
