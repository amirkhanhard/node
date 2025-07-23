import fs from 'fs';

let myProducts  = [];

try {
    fs.readFile("./tmp/products.json","utf-8", (err, data) => {
        if(err) throw err;
        const products = JSON.parse(data);
        console.log(products);
    })

    myProducts = fs.readFileSync("tmp/products.json","utf-8");//utf 8 for human readable format else it shows <buffer 88 55 44 33
    console.log(myProducts);
    const products = JSON.parse(myProducts);
    console.log(products);


} catch(err) {
 
    console.log("something went wrong", err);
    // console.log(err); //show generic message instead of error trace
}