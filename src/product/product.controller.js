const express = require("express");
const {
  getAllProducts,
  postOneProduct,
  putProductById,
  deleteProductById,
} = require("./product.service");

const { isAuth } = require("../middleware/isAuth.js");
const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const products = await getAllProducts();

  res.send({ message: "succes ", data: products });
});

router.post("/", async (req, res) => {
  const newProduct = req.body;

  const product = await postOneProduct(newProduct);

  res.status(201).send({ message: "create succes", data: product });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, price, description, rating, image } = req.body;

  const product = await putProductById(
    id,
    name,
    price,
    description,
    rating,
    image
  );

  res.send({ message: "edited succes", data: product });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await deleteProductById(id);

  res.send({ message: `succes delete product id ${id}` });
});

module.exports = router;
