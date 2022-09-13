const AuthorsController = require("../controllers/author_controller")


module.exports = app => {
    app.get('/api/author', AuthorsController.allAuthors);
    app.get('/api/author/:id', AuthorsController.oneAuthor);
    app.put('/api/author/edit/:id', AuthorsController.updateAuthor);
    app.post('/api/author/add', AuthorsController.createAuthor);
    app.delete('/api/author/:id', AuthorsController.deleteAuthor);
}