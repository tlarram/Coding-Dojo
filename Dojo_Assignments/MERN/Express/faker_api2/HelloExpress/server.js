
const express = require("express");
const app = express();
const port = 8000;
// import { faker } from '@faker-js/faker';

// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);


const createFakeUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number() ,
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  };
  return newUser;
};

const newFakeUser = createFakeUser();
console.log(newFakeUser);


const createFakeCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.Name(),
    this.address = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode:faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newCompany;
};

const newFakeCompany = createFakeCompany();
console.log(newFakeCompany);

app.get('api/users/new', (req,res) => {
  res.json(newUser);
});

app.get('api/companies/new', (req,res) => {
  res.json(newCompany)
});

app.get('api/user/company', (req,res) => {
  res.json(newUser,newCompany)
});

// // make sure these lines are above any app.get or app.post code blocks
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );
// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello" });
// });

  
// app.get("/api/users", (req, res) => {
//   res.json( users );
// });

// app.post("/api/users", (req, res) => {
//   // req.body will contain the form data from Postman or from React
//   console.log(req.body);
//   // we can push it into the users array for now...
//   // later on this will be inserted into a database
//   users.push(req.body);
//   // we always need to respond with something
//   res.json( { status: "ok" } );
// });

// app.get("/api/users/:id", (req, res) => {
//   // we can get this `id` variable from req.params
//   console.log(req.params.id);
//   // assuming this id is the index of the users array we could return one user this way
//   res.json( users[req.params.id] );
// });

// app.put("/api/users/:id", (req, res) => {
//   // we can get this `id` variable from req.params
//   const id = req.params.id;
//   // assuming this id is the index of the users array we can replace the user like so
//   users[id] = req.body;
//   // we always need to respond with something
//   res.json( { status: "ok" } );
// });

// app.delete("/api/users/:id", (req, res) => {
//   // we can get this `id` variable from req.params
//   const id = req.params.id;
//   // assuming this id is the index of the users array we can remove the user like so
//   users.splice(id, 1);
//   // we always need to respond with something
//   res.json( { status: "ok" } );
// });

app.listen( port, () => console.log(`Listening on port: ${port}`) );
