import fs from 'fs';

let b = null;
try {

    // update the content with provided content also create file if does not exists.
    fs.writeFile('./tmp/products.txt', "This is a data", ()=>{
        console.log("Written to the file")
    });
    
    // update the content with provided content also create file if does not exists.
    fs.writeFileSync('./tmp/products.txt', "This is a data2")
    console.log("Finished reading file")

} catch(err) {
 
    console.log("something went wrong", err);
    // console.log(err); //show generic message instead of error trace
}