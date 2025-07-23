import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Token missing' });

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
}

// app.use((err, req, res, next) => {
//     console.error(err); // log server-side
//     res.status(500).json({ error: 'Internal Server Error' }); // generic message to client
// });


try {
    let secret = "a-string-secret-at-least-256-bits-long";
    var token = jwt.sign({ sub: '1234567891', name: 'John Doe', admin: true, iat: 1516239022 }, secret);
    console.log(token);
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

    const decoded = jwt.verify(token, secret+"1");
    console.log(decoded);
    // { sub: '1234567890', name: 'John Doe', admin: true, iat: 1516239022 }
} catch(e) {
    // console.log(e);
}