import obj from "./second.js";

// const obj = require("./second.js");


// Here if i try to use import then it will throw warning but i can use require() here
// exrension with .js must have type module in package.json or use .mjs extension for using import

// (node:50825) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///var/www/html/ak/njs/mjs/first.js is not specified and it doesn't parse as CommonJS.
// Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
// To eliminate this warning, add "type": "module" to /var/www/html/ak/njs/package.json.
// (Use `node --trace-warnings ...` to show where the warning was created)


obj.hello();
console.log(obj.text);
// hello
// text goes here

