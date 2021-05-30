const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const facultyRouter = require("./routes/facultyRouter.js");

let dbConnectCounter = 0;
function dbConnect(){
    mongoose.connect("mongodb+srv://Sheeba:sheeba@cluster0.qtqtg.mongodb.net/wellnessCenter?retryWrites=true&w=majority"
      ,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },(err)=>{
      if(!err)
        console.log("database connected");
      else if(dbConnectCounter<process.env.DB_RETRIES_MAX){
        dbConnectCounter++;
        console.log(`retry ${dbConnectCounter}`);
        dbConnect();
      }
      else{
        throw new Error("db connection failed");
      }
    });
};
  
dbConnect();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    if(req.method=="OPTIONS"){
      res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,PATCH");
      return res.status(200).json({});
    }
});

//


app.use('/faculty',facultyRouter);


//

app.use((req,res,next)=>{
    const error = new Error("Not a valid request");
    error.status=404;
    next(error);
});
app.use((err,req,res,next)=>{
    console.log("Check part 1 of URL");
    console.log(err);
    res.status(err.status || 500).json({"error":err.message});
});


module.exports = app