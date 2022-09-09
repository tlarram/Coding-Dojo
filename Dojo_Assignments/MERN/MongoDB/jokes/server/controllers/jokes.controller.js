const Joke = require('../models/jokes.model.js');

// testing routes
module.exports.testing = (req, res) =>{
    res.json({ message: "Hello world" })
}

// get all
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// get one
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// create
module.exports.createJoke = (req, res) =>{
    const newJoke= req.body
    Joke.create(newJoke)
        .then(newJoke=> res.json({newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// update
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// delete
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}