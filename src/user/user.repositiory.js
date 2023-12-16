const prisma = require("../db");

const findAllUser = async () => {
  const users = await prisma.user.findMany({
    include: { profile: true },
  });

  return users;
};

const findByIdUser = async (id) => {
  const user = await prisma.user.findMany({
    where: { id: id },
    include: { profile: true, product: true },
  });

  return user;
};

const findByEmailUser = async (email) => {
  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  return user;
};

const updateTokenByEmailUser = async (email, refreshToken) => {
  const user = await prisma.user.update({
    where: { email: email },
    data: { refreshToken: refreshToken },
  });

  return user;
};

const createUser = async (email, hash, image) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hash,
      image: image,
      refreshToken: "",
      role: "ADMIN",
    },
  });

  return user;
};

module.exports = {
  findAllUser,
  findByIdUser,
  findByEmailUser,
  updateTokenByEmailUser,
  createUser,
};
