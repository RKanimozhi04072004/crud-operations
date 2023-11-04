const express=require("express");//express module
const mongoose=require("mongoose");//mongoose module
const studentRoute=require("./controller/studentRoute");

const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();
mongoose.set("strictQuery",true);//Deprection warning //To supress warning
mongoose.connect("mongodb+srv://test:12345@cluster0.qx0zdjl.mongodb.net/schooldatabase");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//middleware
app.use("/studentRoute",studentRoute);
app.listen(4000,()=>{
    console.log("server started at 4000");
})