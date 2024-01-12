const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("You have to Login !");
  }
  try {
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decode;
  } catch (error) {
    console.log(error);
    return res.status(403).send("Invalid token !");
  }
  next();
};

module.exports = authenticateToken;
