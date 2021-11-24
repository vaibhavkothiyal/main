const express= require('express');
const mongoose=require("mongoose");

const connect=()=>{
    try{
        return mongoose.connect("mongodb+srv://vaibhavk1:vaibhavk1@cluster0.wec4j.mongodb.net/test");
    }catch(e){
        console.log(e);
    }
};

const userSchema=new mongoose.Schema({
    id:{type:Number,required:false},
    movie_name:{type:String,required:true},
    movie_genre:{type:String,required:true},
    production_year:{type:Number,required:true},
    budget:{type:Number,required:true}
});

const User=mongoose.model("user",userSchema);

const app=express();
app.use(express.json());

app.get('/users',async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        res.send({users});
    }
    catch{
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.post("/users",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        console.log("inside post");
        res.status(201).send(user);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.get('/users/:id',async(req,res)=>{
    try{
        const users=await User.findById(req.params.id).lean().exec();
        res.send({users});
    }
    catch{
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.patch('/users/:id',async(req,res)=>{
    try{
        const users=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send({users});
    }
    catch{
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.delete('/users/:id',async(req,res)=>{
    try{
        const users=await User.findByIdAndDelete(req.params.id,{new:true}).lean().exec();
        res.send({users});
    }
    catch{
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

app.listen(2348,async ()=>{
    await connect();
    console.log("testing express");
})