const router = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

// Sign Up
router.post("/register" , async(req , res) =>{
    try {
        const {username , password} = req.body;
        const hashPassword = bcrypt.hashSync(password);

        const dbUserName = User.findOne({username : req.body.username});
        console.log(dbUserName.username +" " + req.body.username);

        
        const user = new User({username , password : hashPassword});
        await user
        .save()
        .then(()=>{
            res.status(200).json({message:"User registered successfully!"})
        })
        
    } catch (error) {
        res.status(200).json({message : "User Already Exists"});
    }
});

// Log In

router.post("/login" , async(req , res) =>{
    try {
        const user = await User.findOne({username : req.body.username})
        if(!user){
            res.status(200).json({message : "Please Sign Up first!"})
        }
  
        console.log(JSON.stringify(user.password));
        const isPassword = bcrypt.compareSync(req.body.password , user.password);
        if(isPassword===""){
            res.status(200).json({message: "Password should not be empty"});
        }

        const {password , ...others} = user._doc;
        res.status(200).json({others});
    } catch (error) {
        console.log(error);
        res.status(200).json({message : "Catch error"});
    }
});


module.exports = router;
