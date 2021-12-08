const express=require('express');
const Product=require('../models/productModel');
const authenticate=require('../middleware/authenticate');

const router=express.Router();


router.post("/",authenticate, async (req,res)=>{
    try{
        const user=req.user
        const product=await Product.create({
            name:req.body.name,
            price:req.body.price,
            image_urls:["abbbb.com"],
            user:user.user._id
        });
        return res.status(200).json(product);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.post("/updateOne",authenticate, async (req,res)=>{
    try{
        const user=req.user.user._id;
        // const product=await Product.create({
        //     name:req.body.name,
        //     price:req.body.price,
        //     image_urls:["abbbb.com"],
        //     user:user.user._id
        // });
        console.log(user);
        return res.status(200).json("hi");
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});
router.patch("/updateOne/:id",authenticate, async (req,res)=>{
    try{
        const user=req.user.user;
        const product=await Product.findById(req.params.id);

        if(user._id==product.user){
            const uProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
            return res.status(201).json(uProduct);
        }else{
            res.status(400).json({message:"not authorized",status:"Failed"});
        }
        return res.status(200).json("hi");
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;