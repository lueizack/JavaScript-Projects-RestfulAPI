const express = require("express");
const router = new express.Router();
const Student = require("../models/students")

// 2. We need to define the router
router.get("/lueizack",(req,res) =>{
    res.send("Hello Mr.Lueizack");
});

//Create a new Student USING Async/await inside try catch MOdern Approach
router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
      res.send(e);
    }
  });
  
  //get method for a specific student via his id request i.e. http://localhost:3000/students/602d28227f67d30270cd8aaa
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById(_id);
  
      if (!studentData) {
        return res.status(404).send();
      } else {
        res.send(studentData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // //get method for a specific student via his name request i.e. http://localhost:3000/students/602d28227f67d30270cd8aaa
  router.get("/students/:name", async (req, res) => {
      try {
        const _name = req.params.name;
        const studentData = await Student.find(_name);
    
        if (!studentData) {
          return res.status(404).send();
        } else {
          res.send(studentData);
        }
      } catch (e) {
        res.status(500).send(e);
      }
    });
  
  
    router.delete("/students/:id", async (req,res) => {
        try {
            const deleteStudent = await Student.findByIdAndDelete(req.params.id);
            if(!req.params.id){
                return res.status(400).send();
            }
            res.send(deleteStudent);
        } catch (e) {
              res.status(500).send(e);
        }
    })
  router.patch("/students/:id", async (req,res) => {
      try {
          const _id = req.params.id;
          const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new: true});
          res.send(updateStudent);
      } catch (e) {
          res.status(400).send(e);
          
      }
  })
  

module.exports = router;