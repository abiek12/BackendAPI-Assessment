const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require("./connection");

//Connect to DB
connection.connectToDb;

// Body parser middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
