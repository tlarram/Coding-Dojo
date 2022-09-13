const mongoose = require('mongoose');
 
const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Full Name is required"]

    },
});
 
const Author = mongoose.model('Author', AuthorsSchema);
 
module.exports = Author;