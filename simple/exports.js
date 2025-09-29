// b.js

let data1 = {
    asdf1:"asdf",
    asdf2:"asdf2"
};
let data2 = {
    asdf1:"2asdf",
    asdf2:"2asdf2"
};
exports.data = data1;
module.exports = {
    data2:data2
}


// a.js

const a = require("./b.js")
console.log(a);
console.log(a.data2);


{ data2: { asdf1: '2asdf', asdf2: '2asdf2' } }
{ asdf1: '2asdf', asdf2: '2asdf2' }



module.exports = {} → Replaces the entire export object.

exports.data = {} → Adds a property called data to the exports object.
