const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRound = 10;

//Sign up GET routes
router.get("/signup", (req, res) => {
  res.send("Welcome to signup");
});

//Sign up POST routes
router.post("/signup", async (req, res) => {
  try {
    //get all the data from the request body
    let { email, password } = req.body;
    //All data should be there
    if (!(email, password)) {
      res.status(400).send("All fields are compulsory!");
    } else {
      //check if user already exist email
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        res.status(400).send("Email already exists!");
      } else {
        //Encrypt the password
        const hashedPassword = await bcrypt.hash(password, saltRound);
        //save the user to db
        const user = await User.create({
          email: email,
          password: hashedPassword,
        });
        res.status(200).send({
          message:"Registered Sucessfully",
          user,
        });
      }
    }
  } catch {
    console.log(Error);
  }
});

module.exports = router;
