const {
  findAllUser,
  findByIdUser,
  createUser,
  findByNameUser,
  findByEmailUser,
  updateTokenByEmailUser,
} = require("./user.repositiory");

const getAllUser = async () => {
  const user = await findAllUser();
  return user;
};

const getByIdUser = async (id) => {
  const user = await findByIdUser(id);
  return user;
};

const getByEmailUser = async (email) => {
  const user = await findByEmailUser(email);
  return user;
};

const postTokenByEmailUser = async (email, refreshToken) => {
  const user = await updateTokenByEmailUser(email, refreshToken);
  return user;
};

const postRegisterUser = async (email, hash, image) => {
  const user = await createUser(email, hash, image);
  return user;
};

module.exports = {
  getAllUser,
  getByIdUser,
  getByEmailUser,
  postTokenByEmailUser,
  postRegisterUser,
};
