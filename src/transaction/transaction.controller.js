const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send({ status: "success", message: "ini tes" });
  } catch (error) {
    res.send({ status: error });
  }
});

router.get("/:transaction_id", async (req, res) => {});

router.post("/", async (req, res) => {});

router.put("/:transaction_id", async (req, res) => {});

module.exports = router;
