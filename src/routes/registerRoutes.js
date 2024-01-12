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
    let { username, email, password } = req.body;
    //All data should be there
    if (!(username && email && password)) {
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
        await User.create({
          userName: username,
          email: email,
          password: hashedPassword,
        });
        res.status(201).send({
          message: `${username} Registered Sucessfully`
        });
      }
    }
  } catch {
    console.log(Error);
  }
});

module.exports = router;
