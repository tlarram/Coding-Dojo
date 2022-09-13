const Author = require('../models/author_model');

// testing routes
module.exports.testing = (req, res) =>{
    res.json({ message: "Hello world" })
}

// get all
module.exports.allAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// get one
module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// create
module.exports.createAuthor = (req, res) =>{
    const newAuthor= req.body
    Author.create(newAuthor)
        .then(newAuthor=> res.json({newAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// update
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ Author: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// delete
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomAuthor = (req, res) => {
    Author.find()
    .then(allAuthors => {
        const randomId= Math.floor(Math.random() * allAuthors.length);
        res.json(allAuthors[randomId])
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}