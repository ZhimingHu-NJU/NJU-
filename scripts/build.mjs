import { mkdirSync, copyFileSync, cpSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/src/data', { recursive: true });
copyFileSync('index.html', 'dist/index.html');
copyFileSync('src/styles.css', 'dist/src/styles.css');
copyFileSync('src/app.js', 'dist/src/app.js');
copyFileSync('src/data/site.js', 'dist/src/data/site.js');
console.log('Static prototype built to dist/');
