const {Schema,model}=require('mongoose');

const weatherSchema= new Schema({
    city_name:{type:String,required:true},
    max_temperature:{type:Number,required:true},
    min_temperature:{type:Number,required:true},
    chance_of_rain:{type:Number,required:true},
    humidity:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports=model("weather",weatherSchema);

