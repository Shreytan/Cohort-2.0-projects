const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shreyanshshukla7:0SEA32iH5nU5mAXm@cluster0.ivw5f.mongodb.net/myTodoApp");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = ({
    todo});