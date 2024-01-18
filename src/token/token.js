const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const createAccessToken = (userId) => {
  return jwt.sign({ userId }, `${process.env.ACCESS_TOKEN_SECRET}`, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (userId) => {
  return jwt.sign({ userId }, `${process.env.REFRESH_TOKEN_SECRET}`, {
    expiresIn: "7d",
  });
};

const sendAccessToken = (req, res, accessToken) => {
  res.send({
    accessToken,
    email: req.body.email,
    status: "login succes",
  });
};

const sendRefreshToken = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    Path: "/refresh_token",
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
