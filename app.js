const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const connection = require("./src/connection");
const regRoutes = require("./src/routes/registerRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const forgotPwd = require("./src/routes/forgotPwdRoutes");
const resetPwd = require("./src/routes/resetPwdRoutes");
const getUserInfo = require("./src/routes/getUserInfo");

//Connect to DB
connection.connectToDb;

// Body parser middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

//Routes middlewares
app.use("/api/user", regRoutes);
app.use("/api/user", loginRoutes);
app.use("/api/user", forgotPwd);
app.use("/api/user", resetPwd);
app.use("/api/user", getUserInfo);

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
