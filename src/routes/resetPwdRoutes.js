const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const saltRound = 10;

//GET reset password routes
router.get("/reset-password/:token", (req, res) => {
  res.status(200).json({ message: "Reset Password, Enter Your new password" });
});

//POST reset password routes
router.post("/reset-password/:token", async (req, res) => {
  try {
    //Getting token from url
    const resetToken = req.params.token;
    //Getting all data from user
    const { newPassword, confirmPassword } = req.body;
    if (!(newPassword && confirmPassword)) {
      res.status(400).json({ message: "All fields are compulsory" });
    } else {
      //Find user by token and check if token has expired
      const user = await User.findOne({
        resetPasswordToken: resetToken,
        resetPasswordExpires: { $gt: Date.now() },
      });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid or expired password reset link!" });
      } else {
        //Encrypt the password
        const hashedPassword = await bcrypt.hash(confirmPassword, saltRound);
        // Set the new password and clear reset token fields
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        // Save the updated user
        await user.save();
        // Respond to the user
        res.json({ message: `Password has been reset successfully.` });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error while resetting password" });
  }
});

module.exports = router;
