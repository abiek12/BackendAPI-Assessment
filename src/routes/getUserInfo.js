const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Profile" });
});

module.exports=router