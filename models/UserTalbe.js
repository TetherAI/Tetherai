const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    email: {
        type: String,
        trim:true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
    },
    invited: {
        type: String,
        unique:true
    },
    register: {
        type: String,
        length: 6,
    },
    verify:{
        type:String,
        default:null
    },
    timeVerify:{
        type:Date
    },
    create: {
        type: Date,
        default: ()=> {
            return new Date()
        }
    },
    update: {
        type: Date,
        default: ()=>{return new Date()}
    },
})


const UserTable = mongoose.model("UserTable", Schema);

module.exports = UserTable;
