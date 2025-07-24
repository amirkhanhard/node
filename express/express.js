import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
let sampleProducts = [];

try {
    sampleProducts = fs.readFileSync("products.json","utf8");
    sampleProducts = JSON.parse(sampleProducts);
    console.log(sampleProducts);

} catch(err) {
    throw err;
}
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})

function authMiddleware(req, res, next) {
    let secret = "a-string-secret-at-least-256-bits-long";
    let token = req.headers['authorization'];
    
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Token missing' });

    token = token.replace("Bearer ", "");
    try {
        let decoded = jwt.verify(token, secret);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid token' });
    }
}

// GET http://localhost:5000/product/
app.get('/product/', authMiddleware, (req, res) => {
    res.status(200).json(sampleProducts)
})

// GET http://localhost:5000/product/1
app.get('/product/:id', (req, res) => {
    let productData = [];
    const product = sampleProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    for(let prod of sampleProducts) {
        if(req.params.id == prod.id) {
            productData = prod;
        }
    }
    res.status(404).json(productData)
    
})

// POST http://localhost:5000/product/
// {
//     "id": 1,
//     "name": "Wireless Mouse 111",
//     "description": "A smooth and responsive wireless mouse.",
//     "price": 599,
//     "category": "Electronics",
//     "inStock": true
//   }
app.post('/product', (req, res) => {
    sampleProducts.push(req.body);
    res.status(200).json(sampleProducts)
})

// PUT http://localhost:5000/product/1
// {
//     "id": 1,
//     "name": "Wireless Mouse 111",
//     "description": "A smooth and responsive wireless mouse.",
//     "price": 599,
//     "category": "Electronics",
//     "inStock": true
//   }
app.put('/product/:id', (req, res) => {
    const product = sampleProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });

    sampleProducts = sampleProducts.map((val, index) => {
        return req.params.id == val.id ? req.body : val;
    })
    res.status(200).json(sampleProducts)
})

// DELETE http://localhost:5000/product/3
app.delete('/product/:id', (req, res) => {
    const product = sampleProducts.find(p => p.id === parseInt(req.params.id));
    console.log(product);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    sampleProducts = sampleProducts.filter((val, index) => {
        return req.params.id == val.id ? false : true;
    })
    res.status(200).json(sampleProducts)
})