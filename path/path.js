import path from 'path'
import url from 'url'

let filePath = "./dir1/dir2/test.txt";

let currentUrl = import.meta.url;
//file:///var/www/html/ak/njs/url/url.js  return file url


let absPath = url.fileURLToPath(currentUrl);
console.log(absPath);
// /var/www/html/ak/njs/path/path.js

console.log(path.basename(filePath));
// test.txt

console.log(path.dirname(filePath));
// ./dir1/dir2

console.log(path.extname(filePath));
// .txt

console.log(path.parse(filePath));
// {
//     root: '',
//     dir: './dir1/dir2',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
//   }

