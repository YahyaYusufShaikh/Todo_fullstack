const mongoose = require('mongoose');
mongoose.connect("Your mongoDB URL");
const todoScheme = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todos', todoScheme);
module.exports = {
    todo : todo 
}