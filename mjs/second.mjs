//if your file extension is mjs then type module is not required in your node js app
//hence you can use 'import' to import data from this file.
let hello = function() {
    console.log("hello");
};
let obj = {
    hello:hello,
    text:"text goes here"
};
export default obj;