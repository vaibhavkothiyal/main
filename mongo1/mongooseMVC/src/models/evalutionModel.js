const mongoose=require('mongoose');

const evalutionSchema = new mongoose.Schema({
    eval_no: { type: Number, required: true },
    date: { type: String, required: true },
    instruc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    topic_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "topic",
        required: true
    },
});
module.exports = mongoose.model("evalution", evalutionSchema)