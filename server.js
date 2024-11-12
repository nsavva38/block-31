const express = require("express");
const app = express();

const PORT = 3000;
const employees = require("./employees");


app.get("/", (req, res) => {
  res.send("Hello Employees!");
})

app.get("/employees", (req, res) =>{
  res.json(employees);
})

app.get("/employees/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * employees.length);
  res.json(employees[randomNum]);
})

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("This person is not an employee");
  } else {
    res.json(employees[id]);
  }
})



app.listen(PORT, () => {
  console.log(`Employees on port ${PORT}`);
})