const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [5, "Full Joke is required"]

    }, 
    punchline:{
        type:String,
        required: [true, "Punchline is required"],
        minlength: [1, "Full Punchline is required"]

    },
    rating:{
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating Joke is 1-5"],
        max: [5, "Rating Joke is 1-5"]

    } 
    
});
 
const Joke = mongoose.model('Joke', JokesSchema);
 
module.exports = Joke;