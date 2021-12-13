const express=require('express');
const Theatre=require('../models/theatreModel');

const router=express.Router();


router.post("/",async (req,res)=>{
    try{
        const product=await Theatre.create(req.body);
        return res.status(200).json(product);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;