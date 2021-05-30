const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const appointmentSchema = new mongoose.Schema({
    appointmentId:Number,
    studentRollNo:String,//
    facultyId:Number,
    studentContact:String,//
    studentName:String,//
    department:String,//
    year:Number,//
    reason:String,//
    date:String,//
    hour:String,//
    appointmentStatus:{type:Boolean,default:false}
});

appointmentSchema.plugin(AutoIncrement, { inc_field: 'appointmentId' });
module.exports = mongoose.model('Appointment', appointmentSchema);