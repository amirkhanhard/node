import AuthUser from "../models/auth.model.js"

export default async function authTest(req, res) {
    AuthUser.create({email:"test@gmail.com", password: "test123"});
    
    const user = await AuthUser.findOne({email:"test@gmail.com"});
    
    res.status(200).json({msg: user})
}
