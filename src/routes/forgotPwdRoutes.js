const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const crypto = require("crypto");

//GET forgot password routes
router.get("/forgot-password", (req, res) => {
  res.status(200).json({ message: "Forgot password?" });
});

//POST forgot password routes
router.post("/forgot-password", async (req, res) => {
  try {
    //getting all data from the user
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "Enter your!" });
    } else {
      //check whether the user registered or not
      const user = await User.findOne({ email: email });
      if (!user) {
        res.status(400).json({
          message: "You dont have any account!, please sign up first",
        });
      } else {
        //Token Generating
        const token = crypto.randomBytes(20).toString("hex");
        //Save the token in your database, set expiration
        user.resetPasswordToken = token;
        user.resetPasswordExpires = new Date.now() + 300 * 60 * 1000;
        await user.save();
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
