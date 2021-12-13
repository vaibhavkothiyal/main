const {Schema,model}=require('mongoose');

const screenSchema=new Schema({
    name:{type:String,required:true},
    threatre:{
        type:Schema.Types.ObjectId,
        ref:"theatre",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});

module.exports=model("screen",screenSchema);