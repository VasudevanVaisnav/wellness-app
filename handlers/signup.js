const bcrypt = require("bcryptjs");
const user = require("../models/User");

function signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const mobile = req.body.mobile;
    user.findOne({ "username": email }, (error, result) => {
        if (!error && result) {
            return res.status(250).json({ "error": true, "message": "User already exists" });
        }
        else if (!error) {
            bcrypt.hash(password,10,(hashError,hash)=>{
                if (!hashError && hash){
                    const data = new user({
                        username: email,
                        mobileNo: mobile,
                        password: hash,
                        name: name
                    });
                    data.save().catch(err =>{
                        return res.status(250).json({ "error": true, "message": "Unable to Signup" });
                    }).then(signupRes=>{
                        return res.status(200).json({"error":false,"message":"Signup Successful","doc":signupRes});
                    })
                }
                else{
                    return res.status(250).json({ "error": true, "message": "Unable to Signup" });
                }
            })
        }
        else {
            return res.status(250).json({ "error": true, "message": "Unable to Signup" });
        }
    })
}

module.exports = signup;