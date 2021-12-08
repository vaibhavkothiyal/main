require("dotenv").config();
const jwt = require('jsonwebtoken');
const User=require('../models/userModel');

const newToken=(user)=>{
    return jwt.sign({user:user},process.env.JWt_ACCESS_KEY);
}

const register=async (req,res)=>{
    try{

        let user=await User.findOne({email:req.body.email});
        if (user) return res.status(400).json({status:"failed",message:"email already exist"});

        user=await User.create(req.body);

        const user_id=await User.findOne({email:req.body.email});

        const token=await newToken(user);

        res.status(201).json({user,token})

    }catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
};

const login=async (req,res)=>{
    try{ 
        let user=await User.findOne({email:req.body.email});
        if (!user) return res.status(400).json({status:"failed",message:"email not exist"});

        const match = await user.checkPassword(req.body.password);

        if (!match) return res.status(400).json({status:"failed",message:"wrong password"});

        const token=newToken(user);

        res.status(201).json({user,token}) 

    }catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
};

module.exports={register,login,newToken}