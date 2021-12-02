const mongoose=require('mongoose');
const Company=require('../models/companyModel');

const userGalSchema= new mongoose.Schema({
    emp_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company",
        required:true
    },
    pictures:[{type:String}]
});

module.exports=mongoose.model("userGallery",userGalSchema);