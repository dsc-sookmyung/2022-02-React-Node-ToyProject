const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Users',userSchema);