const express=require('express');
const Student=require('../models/studentModel');

const router=express.Router();

router.post('',async(req,res)=>{
    try{
        const student=await Student.create(req.body);
        res.status(201).send(student);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;