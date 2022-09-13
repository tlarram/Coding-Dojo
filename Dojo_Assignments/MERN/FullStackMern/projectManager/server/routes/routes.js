const ProductsController = require("../controllers/product_controller")


module.exports = app => {
    app.get('/api/product', ProductsController.allProducts);
    app.get('/api/product/:id', ProductsController.oneProduct);
    app.put('/api/product/edit/:id', ProductsController.updateProduct);
    app.post('/api/product', ProductsController.createProduct);
    app.delete('/api/product/:id', ProductsController.deleteProduct);
}