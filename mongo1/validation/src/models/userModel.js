const {Schema,model}=require('mongoose');

const userSchema=new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    pincode:{type:Number,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true}
})

module.exports=model("user",userSchema);



// const {Schema,model}=require('mongoose');

// const compnSchema=new Schema({
//     first_name:{type:String,required:true},
//     last_name:{type:String,required:true},
//     profie_pic:{type:String}
// });

// module.exports = model("company", compnSchema);