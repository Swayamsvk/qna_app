const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");

  //Check if not  token
  if (!token) {
    return res.status(401).json({ msg: "No token,authorization denied" });
  }

  try {
    // const secret = {
    //     jwtSecret:"secret"
    // }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
