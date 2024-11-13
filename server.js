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
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});



app.listen(PORT, () => {
  console.log(`Employees on port ${PORT}`);
})