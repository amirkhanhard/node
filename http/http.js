import http from 'http';
let PORT = 5000;

const server  = http.createServer((req, res)=>{
    const method = req.method;
    const headers = req.headers;
    console.log(req.url)
    console.log("Method:", method);
    console.log("Headers:", headers);
    console.log("Headers2:", headers['accept-encoding']);

    // res.writeHead(500, { 'Content-Type': 'text/plain' });
    // res.end('OK\n');

    // OR

    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Type', 'application/json')
    res.end(`[
        {
            "id": 1,
            "name": "Wireless Mouse",
            "description": "A smooth and responsive wireless mouse.",
            "price": 599,
            "category": "Electronics",
            "inStock": true
        },
        {
            "id": 2,
            "name": "Gaming Keyboard",
            "description": "Mechanical keyboard with RGB lighting.",
            "price": 1999,
            "category": "Electronics",
            "inStock": true
        },
        {
            "id": 3,
            "name": "Water Bottle",
            "description": "500ml stainless steel bottle.",
            "price": 299,
            "category": "Kitchen",
            "inStock": false
        }
    ]`);
})
server.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);

});