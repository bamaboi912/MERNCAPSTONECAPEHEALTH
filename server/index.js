const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


app.use(express.json());
const cors = require("cors");

app.use(cors());

const PORT = 3001

const router = require("./Routes/patientRoutes");

app.use("./patient", router);



mongoose.connect("mongodb+srv://bamaboi912:Student1234!@cluster0.f4zp47m.mongodb.net/MERN_HEALTH_CAPSTONE?retryWrites=true&w=majority").then(() => console.log
("Connected To Database"))
.then(()=>console.log("Backend Server Listening on Port:"+ PORT))
.then(()=>{
    app.listen(PORT)
}).catch((err)=>console.log(err));
