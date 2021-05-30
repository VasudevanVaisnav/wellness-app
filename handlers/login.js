const bcrypt = require("bcryptjs");
const user = require("../models/User");

function login(req,res,next){
    const email = req.body.email;
    const password = req.body.password;
    user.findOne({"username":email},(error,result)=>{
        if (!error && result){
            bcrypt.compare(password,result.password,(hashError,verdict)=>{
                if (!hashError && verdict){
                    return res.status(200).json({"error":false,"message":"Login Successful","doc":result});
                }
                else{
                    return res.status(250).json({"error":true,"message":"Invalid Credentials"});
                }
            })
        }
        else{
            return res.status(250).json({"error":true,"message":"User not found"});
        }
    })    
}

module.exports = login;