const mongoose = require('mongoose');
mongoose.connect("Your mongodb url");
const todoScheme = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todos', todoScheme);
module.exports = {
    todo : todo 
}