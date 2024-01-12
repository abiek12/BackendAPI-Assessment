const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Sign in GET routes
router.get("/signin", (req, res) => {
  res.json({ message: "Welcome to Sign in" });
});

//sign in POST routes
router.post("/signin", async (req, res) => {
  try {
    //getting all data from the user
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({ message: "All fields are compulsory!" });
    } else {
      //check whether the user registered or not
      const user = await User.findOne({ email: email });
      if (!user) {
        res.status(404).json({
          message: "You dont have any account!, please sign up first",
        });
      } else {
        //comparing the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          //Token creation
          const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: "1h",
          });
          user.token = token;
          user.password = undefined;
          //cookie section
          const option = {
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
            httpOnly: true,
          };
          res.status(200).cookie("token", token, option).json({
            message: `${user.userName} Login successful`,
            token
          });
        } else {
          return res
            .status(401)
            .json({ message: "Authentication failed. Wrong password." });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
