const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passSchema = new Schema({

    id: {type:String, required: true, unique: true}, 
    password:{type:String, required:true},
    created : { type: Date, default: Date.now }
});

module.exports =  mongoose.model('password', passSchema);