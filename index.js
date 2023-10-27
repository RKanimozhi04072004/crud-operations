const express=require("express");
const mongoose=require("mongoose");
const studentRoute=require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

//mongodb+srv://test:12345@cluster0.qx0zdjl.mongodb.net/schooldatabase
// mongodb://127.0.0.1:27017/schooldatabase"
const app=express();
mongoose.set("strictQuery",true);//To supress warning//Deprection warning
mongoose.connect("mongodb+srv://test:12345@cluster0.qx0zdjl.mongodb.net/schooldatabase");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/studentRoute",studentRoute)

app.listen(4000,()=>{
    console.log("server started at 4000");
})