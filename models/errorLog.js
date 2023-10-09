const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    error:{
        type: String,
        required: true,
    },
}, {timestamps:true})


const errorLog = mongoose.model("errorLog", Schema)

module.exports = errorLog
