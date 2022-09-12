const mongoose = require('mongoose');
 
const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Full Title is required"]

    }, 
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Min price required"],
        

    },
    description:{
        type:String,
        required: [true, "Description is required"],
        minlength: [1, "Full description is required"]

    } 
    
});
 
const Product = mongoose.model('Product', ProductsSchema);
 
module.exports = Product;