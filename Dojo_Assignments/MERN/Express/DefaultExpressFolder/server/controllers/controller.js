const users = [
    { firstName: "Reimu", lastName: "Hakurei" }, // 0
    { firstName: "Marisa", lastName: "Kirisame" }, // 1
    { firstName: "Sanae", lastName: "Kochiya" }, // 2
    { firstName: "Sakuya", lastName: "Izayoi" }, // 3
    { firstName: "Momiji", lastName: "Inubashiri" } // 4
];

// testing routes
module.exports.testing = (req, res) =>{
    res.json({ message: "Hello world" })
}

// get all
module.exports.allUsers = (req, res) => {
    res.json(users)
}

// get one
module.exports.oneUser = (req, res) => {
    const userId = req.params.id
    res.json(users[userId])
}

// create
module.exports.createUser = (req, res) =>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
}

// update
module.exports.updateUser = (req, res) =>{
    const userId = req.params.id
    const updatedData = req.body
    users[userId] = updatedData
    res.json(users[userId])
}

// delete
module.exports.deleteUser = (req, res) =>{
    const userId = req.params.id
    users.splice(userId, 1)
    res.json({ status: "ok" })
}