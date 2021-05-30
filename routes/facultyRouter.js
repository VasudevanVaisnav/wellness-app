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

router.get('/getprofile:facultyId',getProfile);
router.get('/getappointments:facultyId',getAppointments);
router.get('/getappointmentstatus:appId',getAppointmentStatus);
router.post('/login',login);//done
router.get('/signup',signup);//done
router.get('/fixappointment',fixAppointment);

module.exports = router;