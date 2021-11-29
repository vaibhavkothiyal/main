const mongoose=require('mongoose');

const evalAttmpSchema = new mongoose.Schema({
    evalution_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Evalution",
        required:true
    },
    attempted_by: [
        [{
            type: String,
            required: true
        }, { type: Number, required: true }]
    ]
})
module.exports=mongoose.model("evalAtmpt",evalAttmpSchema);