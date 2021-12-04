const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports=mongoose.model('post',postSchema);