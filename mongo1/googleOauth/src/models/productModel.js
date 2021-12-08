const {Schema,model}=require('mongoose');

const productSchema=new Schema({
    name:{type:String,required:true},
    price:{type:Number,requird:true},
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    image_urls:[{type:String,required:true}]
},{timestamps:true,versionKey:false})

module.exports=model("product",productSchema);