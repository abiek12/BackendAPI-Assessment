const express = require("express");
const router = express.Router();

//Sign in GET routes
router.get("/signin", (req, res) => {
  res.send("Welcome to Sign in");
});

//sign in POST routes
router.post("/signin",(req,res)=>{
    res.send("Sign in")
})

module.exports = router;
