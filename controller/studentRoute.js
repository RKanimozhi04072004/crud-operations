const express=require("express");
const studentSchema=require("../model/studentSchema");
const studentRoute=express.Router();
module.exports=studentRoute;
const mongoose=require("mongoose");
studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body, //"name":"Kani","email":"kani@gmail.com","rollNo":3
        (err,data)=>{
            if(err)
              return err;
            else
              res.json(data);
        })
});
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
           return err
        else
           res.json(data);
    })
});
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
}).put((req,res)=>{
   studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
   {$set:req.body},
   (err,data)=>{
    if(err)
      return err;
    else
      res.json(data);
   })
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
         return err;
       else
         res.json(data);
    })
});



//studentRoute.get("/update-student/:id")
//studentRoute.put("/update-student/:id")
// studentRoute.delete()
//_id -> http://localhost:4000/studentRoute/update-student/652f71af4bcdcdfec79f241a -> objectId for kani
//http://localhost:4000/studentRoute/update-student/652f71af4bcdcdfec79f241a

//Axios.put("http://localhost:4000/studentRoute/update-student/652f71af4bcdcdfec79f241a")//access put function


// http://localhost:4000/studentRoute