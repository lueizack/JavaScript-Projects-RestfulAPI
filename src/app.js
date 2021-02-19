const express = require("express");
require("./db/conn");


const studentRouter = require("./routers/student");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

// app.get("/",(req,res) => {

//     res.send("Hi from inside project");
// })

//Create a new Student USING then/catch PROMISES

// app.post("/students", (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then( () =>{
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

app.listen(port, () => {
  console.log(`Connection established on ${port}`);
});
