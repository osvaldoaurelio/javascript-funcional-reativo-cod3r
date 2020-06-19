const fs = require('fs');
const Path = require('path');

const path = Path.join(__dirname, '..', 'data', 'dados.txt');

const showContent = path => new Promise(resolve => fs.readFile(path, (_, buffer) => resolve(buffer)));

showContent(path).then(buffer => buffer.toString()).then(console.log);
