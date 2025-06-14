const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '404.html');
const dest = path.join(__dirname, 'dist', '404.html');

fs.copyFileSync(src, dest);
console.log('404.html copied to dist/404.html'); 