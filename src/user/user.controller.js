const express = require("express");
const {
  getAllUser,
  getByIdUser,
  getByEmailUser,
  postTokenByEmailUser,
  postRegisterUser,
} = require("./user.service");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../token/token.js");

const jwt = require("jsonwebtoken");

//GETALL_USER
router.get("/", async (req, res) => {
  try {
    const user = await getAllUser();

    res.send({ message: "succes", data: user });
  } catch (error) {
    res.send({ message: error });
  }
});

//GETBYID_USER
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getByIdUser(id);

    res.send({ message: "succes", data: user });
  } catch (error) {
    res.send({ message: error });
  }
});

//POSTREGISTER_USER
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const checkEmailUser = await getByEmailUser(email);

  const image =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

  if (checkEmailUser !== null) {
    res.send({ message: "email  already registered" });
    return;
  }

  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      const user = await postRegisterUser(email, hash, image);
      res.send({ message: "succes", data: user });
    });
  } catch (error) {
    res.send({ message: error });
  }
});

//POSTLOGIN_USER

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //get name in db from username
  const checkEmailUser = await getByEmailUser(email);

  //check the username already registered or no
  if (checkEmailUser == null) {
    res.send({ message: "email wrong" });
    return;
  }

  try {
    const userFound = await getByEmailUser(email);
    // compare password from body and password from db
    bcrypt.compare(password, userFound?.password, (err, result) => {
      if (!result) {
        res.send({ message: "wrong password" });
        return;
      } else {
        const accessToken = createAccessToken(userFound.id);
        const refreshToken = createRefreshToken(userFound.id);
        postTokenByEmailUser(email, refreshToken);
        sendRefreshToken(res, refreshToken);
        sendAccessToken(req, res, accessToken);
      }
    });
  } catch (error) {
    res.send({ message: error });
  }
});

//POSTLOGOUT_USER
router.post("/logout", (_req, res) => {
  res.clearCookie("refreshtoken");
  return res.send({
    message: "user logout",
  });
});

//POSTREFRESHTOKEN_USER

router.post("/refresh_token", async (req, res) => {
  const token = await req.cookies.refreshToken;

  if (!token) {
    return res.send({ accestoken: "1" });
  }
  let payload = null;

  try {
    payload = jwt.verify(token, `${process.env.REFRESH_TOKEN_SECRET}`);
  } catch (error) {
    res.send({ accestoken: " 2" });
  }

  // Token is valid
  const user = await getByIdUser(payload.userId);

  if (!user) return res.send({ accestoken: "3 " });
  if (user[0]?.refreshToken !== token) {
    console.log(user[0]?.refreshToken);
    console.log(token);
    return res.send({ accestoken: "4 " });
  }
  const accessToken = createAccessToken(user.id);
  const refreshToken = createRefreshToken(user.id);
  postTokenByEmailUser(user[0].email, refreshToken);
  sendRefreshToken(res, refreshToken);
  return res.send({ accesstoken: accessToken });
});

router.put("/:id", (req, res) => {
  const user = "";

  res.send({ message: "succes", data: user });
});

router.patch("/:id", (req, res) => {
  const user = "";

  res.send({ message: "succes", data: user });
});

router.delete("/:id", (req, res) => {
  const user = "";

  res.send({ message: "succes", data: user });
});

module.exports = router;
