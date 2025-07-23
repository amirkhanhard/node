import url from 'url';

const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

// console.log(myURL);
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'sub.example.com:8080',
//     port: '8080',
//     hostname: 'sub.example.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
//   }
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL);
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'sub.example.com:8080',
//     port: '8080',
//     hostname: 'sub.example.com',
//     hash: '#fgh',
//     search: '?d=e',
//     query: 'query=string',
//     pathname: '/a/b/c',
//     path: '/p/a/t/h?query=string',
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
//   }

const myURL2 = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// URL {
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
//     origin: 'https://sub.example.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.example.com:8080',
//     hostname: 'sub.example.com',
//     port: '8080',
//     pathname: '/p/a/t/h',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash'
//   }
myURL2.pathname = '/a/b/c';
myURL2.search = '?d=e';
myURL2.hash = '#fgh';
console.log(myURL2)
// URL {
//     href: 'https://user:pass@sub.example.com:8080/a/b/c?d=e#fgh',
//     origin: 'https://sub.example.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.example.com:8080',
//     hostname: 'sub.example.com',
//     port: '8080',
//     pathname: '/a/b/c',
//     search: '?d=e',
//     searchParams: URLSearchParams { 'd' => 'e' },
//     hash: '#fgh'
//   }
console.log(myURL2.href)

let currentUrl = import.meta.url;
//file:///var/www/html/ak/njs/url/url.js  return file url


let absPath = url.fileURLToPath(currentUrl);
console.log(absPath);
// /var/www/html/ak/njs/url/url.js

let params = new URLSearchParams(myURL2.search);
console.log(params.get('d')); //e
params.append('limit',5);
console.log(params.get('limit'));//5
console.log(params);
//URLSearchParams { 'd' => 'e', 'limit' => '5' }
console.log(params.delete('limit'));
console.log(params);
//URLSearchParams { 'd' => 'e'}