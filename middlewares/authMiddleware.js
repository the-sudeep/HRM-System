const jwt = require("jsonwebtoken");

const tokenValidator = async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "User unauthorized!! ",
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Token is missing!! ",
    });
  }
};

module.exports = tokenValidator;
