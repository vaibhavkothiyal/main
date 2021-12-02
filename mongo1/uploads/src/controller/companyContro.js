const express=require('express');
const Company=require('../models/companyModel');
const upload=require('../middlewares/upload');
const path=require('path')

const router=express.Router();


router.post('/',upload.single("companyImages"), async(req,res)=>{
    try{
        const company=await Company.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profie_pic:req.file.path
        });
        res.status(201).send(company);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});


const fs=require('fs');

router.patch('/:id',upload.single("companyImages"), async(req,res)=>{
    try{
        const user=await Company.findById(req.params.id).lean().exec();
        await fs.unlink(`${user.profie_pic}`, (err => {
            if (err) console.log("this is error",err);
            else {
              console.log("Deleted file");
            }
          }));
        const updatedUserInfo =await Company.findByIdAndUpdate(req.params.id,{profie_pic:req.file.path}); 
        res.status(201).send(updatedUserInfo);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const company=await Company.findById(req.params.id).lean().exec();
        await fs.unlink(`${company.profie_pic}`, (err => {
            if (err) console.log(err);
            else {
              console.log("Deleted file");
            }
          }));
        const deluser=await Company.findByIdAndDelete(req.params.id).lean().exec();
        res.status(201).send(deluser);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

module.exports=router;