const user = require("../models/User");
const appointment = require("../models/Appointment");

function getAppointments(req,res,next){
    const facId = req.params.facultyId;
    user.findOne({"facultyId":facId},(err,doc)=>{
        if (!err && doc){
            appointment.find({"facultyId":facId},(errDoc,result)=>{
                if (!errDoc && result.length>0){
                    return res.status(200).json({"error":false,"message":result});
                }
                else{
                    return res.status(250).json({"error":true,"message":"Data not found"});
                }
            });
        }
        else{
            return res.status(250).json({"error":true,"message":"User not found"});
        }
    })
}

module.exports = getAppointments;