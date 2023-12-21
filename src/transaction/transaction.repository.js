const prisma = require("../db/index.js");

const createTransaction = async () => {
  const transaction = await prisma.transaction.create({
    data: {},
  });

  return transaction;
};

module.exports = { createTransaction };
