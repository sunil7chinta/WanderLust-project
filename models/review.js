const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    comment: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: new Date(Date.now()),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

module.exports=mongoose.model("Review", reviewSchema);

