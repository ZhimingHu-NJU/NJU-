import { existsSync } from 'node:fs';
const required = ['index.html', 'src/app.js', 'src/styles.css', 'src/data/site.js', 'src/data/site.ts'];
const missing = required.filter((file) => !existsSync(file));
if (missing.length) { console.error(`Missing files: ${missing.join(', ')}`); process.exit(1); }
console.log('Prototype files present.');
