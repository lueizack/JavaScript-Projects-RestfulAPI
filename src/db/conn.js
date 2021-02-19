const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api-db",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("mongodb connection is succesfully on");
}).catch( (e) =>{
    console.log("FAIL mongodb connection");
})