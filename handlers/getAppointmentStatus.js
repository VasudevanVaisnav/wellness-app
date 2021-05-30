const user = require("../models/Appointment");

function fixAppointment(req,res,next){
    const appId = req.body.appId;
    user.findOne({"appointmentId":appId},(err,doc)=>{
        if (!err && doc){
            return res.status(200).json({"error":false,"status":doc.appointmentStatus});
        }
        else{
            return res.status(250).json({"error":true,"message":"Appointment not found"});
        }
    })
}

module.exports = fixAppointment;