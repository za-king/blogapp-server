const express = require("express");
const {
  validateTransaction,
  validateTransactionStatus,
} = require("./transaction.validation");
const { catchAsync } = require("../utils/catch.async.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const { products, customer_name, customer_email } = req.body;

  res.send({ status: "succes", message: products });
});

router.get("/", async (req, res) => {
  try {
    res.send({ status: "success", message: "ini tes" });
  } catch (error) {
    res.send({ status: error });
  }
});

router.get("/:transaction_id", async (req, res) => {});

router.put("/:transaction_id", async (req, res) => {});

module.exports = router;
