const Product = require('../models/product_model');

// testing routes
module.exports.testing = (req, res) =>{
    res.json({ message: "Hello world" })
}

// get all
module.exports.allProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ Products: allProducts }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// get one
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(oneProduct => res.json({ Product: oneProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// create
module.exports.createProduct = (req, res) =>{
    const newProduct= req.body
    Product.create(newProduct)
        .then(newProduct=> res.json({newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// update
module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ Product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// delete
module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomProduct = (req, res) => {
    Product.find()
    .then(allProducts => {
        const randomId= Math.floor(Math.random() * allProducts.length);
        res.json(allProducts[randomId])
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}