const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const jwtExpirationTime = process.env.JWT_EXPIRATION_TIME;
  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
      password: user.password,
    },
    jwtSecretKey,
    { expiresIn: jwtExpirationTime }
  );

  return token;
};

module.exports = genAuthToken;
