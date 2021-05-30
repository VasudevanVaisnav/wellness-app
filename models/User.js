const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const userSchema = new mongoose.Schema({
    username:String,
    mobileNo:String,
    password:String,
    name:String,
    facultyId:Number
});

userSchema.plugin(AutoIncrement, { inc_field: 'facultyId' });
module.exports = mongoose.model('User', userSchema);