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
      res.status(400).json({ message: "Enter your mail id!" });
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
        user.resetPasswordExpires = Date.now() + 5 * 60 * 1000;
        await user.save();

        const resetUrl = `${process.env.BASE_URL}/api/user/reset-password/${user.resetPasswordToken}`;
        const msg = `Password reset link. Expires in: ${user.resetPasswordExpires}`;

        res.json({
          email: user.email,
          message: msg,
          resetLink: resetUrl,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
