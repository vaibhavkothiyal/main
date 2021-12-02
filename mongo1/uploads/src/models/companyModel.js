const {Schema,model}=require('mongoose');

const compnSchema=new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    profie_pic:{type:String}
});

module.exports = model("company", compnSchema);