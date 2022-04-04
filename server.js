const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

console.log(faker.animal.dog());
console.log(faker.datatype.uuid());

app.get("/api", (req, res) => {
    res.json({ message: "Dev carrer here I come" });
});


const createUser = () => {
    const newUser = {
      _id: faker.random.alphaNumeric(10),
      fName: faker.name.firstName(),
      lName: faker.name.lastName(),
      phNum: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
      _id: faker.random.alphaNumeric(10),
      name: faker.company.companyName(),
      address: {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
          country: faker.address.country()
      } 
    };
    return newCompany;
};
  
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});
  
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const newBoth = {
        user: newUser,
        company: newCompany
    };
    res.json(newBoth);
});
 

app.listen( port, () => console.log(`Express /w Faker is listening on port: ${port}`) );