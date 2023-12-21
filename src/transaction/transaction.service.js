const { createTransaction } = require("./transaction.repository");

const postCreateTransaction = async () => {
  const transaction = await createTransaction();

  return transaction;
};
