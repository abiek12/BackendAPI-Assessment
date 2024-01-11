const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require("./connection");
const regRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

//Connect to DB
connection.connectToDb;

// Body parser middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes middlewares
app.use("/api/user", regRoutes);
app.use("/api/user", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
