const user = require("../models/User");

function getProfile(req,res,next){
    const facId = req.params.facultyId;
    user.findOne({"facultyId":facId},(err,doc)=>{
        if (!err && doc){
            return res.status(200).json({"error":false,"message":doc});
        }
        else{
            return res.status(250).json({"error":true,"message":"User not found"});
        }
    })
}

module.exports = getProfile;