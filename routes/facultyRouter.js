const express = require('express');
const router = express.Router();
const user = require("../models/User.js");
const appointment = require("../models/Appointment.js");

const login = require("../handlers/login");
const signup = require("../handlers/signup");
const getProfile = require("../handlers/getProfile");
const getAppointmentStatus = require("../handlers/getAppointmentStatus");
const getAppointments = require("../handlers/getAppointments");
const fixAppointment = require("../handlers/fixAppointment");


router.post('/getprofile',getProfile);
router.post('/getappointments',getAppointments);
router.post('/getappointmentstatus',getAppointmentStatus);
router.post('/login',login);//done
router.post('/signup',signup);//done
router.post('/fixappointment',fixAppointment);

module.exports = router;