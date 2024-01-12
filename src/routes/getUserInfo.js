const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const userInfo = await User.findById(req.user.id).select("-password");
    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.json({
        message: "Welcome to profile",
        userInfo,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log(error);
  }
});

module.exports = router;
