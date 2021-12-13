const express=require('express');
const Screen=require('../models/screenModel');

const router=express.Router();


router.post("/",async (req,res)=>{
    try{
        const product=await Screen.create(req.body);
        return res.status(200).json(product);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;