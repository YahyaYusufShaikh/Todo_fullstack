const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin12345678@cluster0.80qmf.mongodb.net/todos");
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