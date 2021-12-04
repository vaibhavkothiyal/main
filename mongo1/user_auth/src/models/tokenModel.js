const mongoose=require('mongoose');

const tokenSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    token:{type:String}
})

module.exports=mongoose.model("token",tokenSchema);