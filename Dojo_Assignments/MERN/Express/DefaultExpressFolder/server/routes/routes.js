const Controller = require("./../controllers/demo2.controller")


module.exports = (app) => {
    app.get("/api/testing", Controller.testing)
    app.get("/api/users", Controller.allUsers)
    app.get("/api/users/:id", Controller.oneUser)
    app.post("/api/users", Controller.createUser)
    app.put("/api/users/:id", Controller.updateUser)
    app.delete("/api/users/:id", Controller.deleteUser)