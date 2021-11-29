const mongoose=require('mongoose');

const studentSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    roll_id: { type: String, required: true },
    batch: { type: Number, required: true },
});
module.exports = mongoose.model("student", studentSchema);