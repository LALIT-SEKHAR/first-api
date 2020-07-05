const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
    },
    link: {
        type: String,
        required: true,
    },
    docof: {
        type: ObjectId,
        ref: "User",
        required: true,
    }
},{timestamps: true})

module.exports = mongoose.model("Doc", docSchema)