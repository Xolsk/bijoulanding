const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({

    id: {type:String,required:true},
    title: {type:String,required:true}, 
    subtitle: {type:String, required: true},
    image:{type:String, required:true},
    text: {type:String, required:true},
});

module.exports =  mongoose.model('news', newsSchema);