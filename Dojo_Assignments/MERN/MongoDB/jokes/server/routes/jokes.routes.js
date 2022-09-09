const JokesController = require("./../controllers/jokes.controller")


module.exports = app => {
    app.get('/api/jokes', JokesController.allJokes);
    app.get('/api/jokes/:id', JokesController.oneJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.post('/api/jokes', JokesController.createJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}