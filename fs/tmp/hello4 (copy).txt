import fs from 'fs';

let myProducts  = [];

try {
    myProducts = fs.readFileSync("products.txt");
    console.log(myProducts);
} catch(err) {
    console.log("something went wrong", err);
    // console.log(err); //show generic message instead of error trace
}