import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' };

http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  let file = join(root, decodeURIComponent(url.pathname));
  if (url.pathname === '/' || !existsSync(file) || statSync(file).isDirectory()) file = join(root, 'index.html');
  res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
  createReadStream(file).on('error', () => { res.statusCode = 404; res.end('Not found'); }).pipe(res);
}).listen(port, () => console.log(`NJU prototype running at http://localhost:${port}`));
