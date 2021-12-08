require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyToken=(token)=>{
    return jwt.verify(token,process.env.JWt_ACCESS_KEY);
}

module.exports=async(req,res,next)=>{
    
    const bearerToken=req?.headers?.authorization;

    if(! bearerToken || ! bearerToken.startsWith('Bearer ')){
        return res.status(500).json({ message: "please provide a valid token1", status: "Failed" });
    }

    const token=bearerToken.split(" ")[1];

    try{
        const user=await verifyToken(token);
        if(! user){
            return res.status(500).json({ message: "please provide a valid token2", status: "Failed" });
        }
        req.user=user;
    }catch(e){
        return res.status(500).json({ message: "please provide a valid token3", status: "Failed" });
    }


    return next();
}