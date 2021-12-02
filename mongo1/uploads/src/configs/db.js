const mongoose=require('mongoose');
module.exports=()=>{
    try{
        return mongoose.connect('mongodb://127.0.0.1:27017/uploads')
    }catch(e){
        console.log(e.message);
    }
}