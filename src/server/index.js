import http from 'http';
import middleware from './lib/apply-middleware';
import { cors, logging } from './middleware';

const hostname = process.env.hostname || '127.0.0.1';
const port = process.env.port || 3005;

const server = http.createServer(async (req, res) => {  
  await middleware([cors], { req, res });

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Set-Cookie', 'bbb=cccc; HttpOnly');
  res.end();
  
  middleware([logging], { req, res });
});

server.listen(port, hostname, () => {
	console.log(`Listening in ${hostname} on port ${port}`);
});