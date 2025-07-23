import fs from 'fs';

let myProducts  = [];
myProducts = fs.readFileSync("products.txt");
console.log(myProducts);