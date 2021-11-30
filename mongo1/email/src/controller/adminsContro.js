const express=require('express');
const Admin=require('../models/adminsModel');

const router=express.Router();
router.post('',async(req,res)=>{
    try{
        const admin=await Admin.create(req.body);
        res.status(201).send(admin);
        console.log("hello admin");
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;

router.get('',async(req,res)=>{
    try{
        const admin=await Admin.find().lean().exec();
        res.status(201).send(admin);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;