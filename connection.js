const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connectToDb: mongoose
    .connect(process.env.DB_uri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(`Not Connected ${err}`);
    }),
};
