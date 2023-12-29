const express = require("express");

const {
  getAllCategory,
  getByIdCategory,
  getByNameCategory,
  postOneCategory,
  deleteOneCategory,
} = require("./category.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await getAllCategory();
    res.send({
      status: "succes",
      message: "all category",
      length: category.length,
      data: category,
    });
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await getByIdCategory(id);
    res.send({
      status: "error",
      message: "get by id",
      data: category,
    });
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});

router.get("/:name/name", async (req, res) => {
  const { name } = req.params;
  try {
    const category = await getByNameCategory(name);
    res.send({
      status: "succes",
      message: "get by name",
      data: category,
    });
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const category = await postOneCategory(name);
    res.send({
      status: "error",
      message: "create category success",
      data: category,
    });
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteOneCategory(id);
    res.send({ status: "error", message: "succes delete category" });
  } catch (error) {
    res.send({ status: "error", message: error });
  }
});

module.exports = router;
