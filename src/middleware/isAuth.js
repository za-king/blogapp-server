const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) throw new Error("you need to login");

    const token = authorization.split(" ")[1];
    jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);

    next();
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { isAuth };
