const appointment = require("../models/Appointment");
const user = require("../models/User");

function fixAppointment(req, res, next) {
    const facId = req.body.facultyId;
    user.findOne({ "facultyId": facId }, (err, doc) => {
        if (!err && doc) {
            const data = new appointment({
                studentRollNo: req.body.rollNo,
                facultyId: facId,
                studentContact: req.body.contact,
                studentName: req.body.name,
                department: req.body.dept,
                year: req.body.year,
                reason: req.body.reason,
                date: req.body.date,
                hour: req.body.hour,
                appointmentStatus: false
            });
            data.save().catch(dbErr=>{
                return res.status(250).json({ "error": true, "message": "Unable to fix appointment" });
            }).then(appres=>{
                return res.status(200).json({ "error": false, "message": "Appointment fixed", "doc":appres });
            });
        }
        else {
            return res.status(250).json({ "error": true, "message": "User not found" });
        }
    })
}

module.exports = fixAppointment;