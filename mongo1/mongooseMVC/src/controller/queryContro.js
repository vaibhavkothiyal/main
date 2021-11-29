const express=require('express');
const User=require('../models/userModel');
const EvalAtmpt=require('../models/evalatmptModel');

const router=express.Router();


router.get('/evalutions/:id/attempt',async(req,res)=>{
    try{
        const evalution=await EvalAtmpt.find({evalution_id:{$eq:req.params.id}}).lean().exec();
        const list=evalution[0].attempted_by;
        var students=[];
        for(let i=0;i<list.length;i++){
            let student=await User.findById(list[i][0],{first_name:1}).lean().exec();
            students.push(student);
        }
        res.status(201).send(students);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

router.get('/evalutions/:id/maxMarks',async(req,res)=>{
    try{
        const evalution=await EvalAtmpt.find({evalution_id:{$eq:req.params.id}}).lean().exec();
        const list=evalution[0].attempted_by;
        let max=list;
        max=max.sort((a,b)=>{
            return b[1]-a[1];
        });
        let student=await User.findById(max[0][0]).lean().exec();
        console.log(max[0][1])
        res.status(201).send([student,{marks:max[0][1]}]);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});


module.exports=router;