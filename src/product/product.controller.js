const express = require("express");
const {
  getAllProducts,
  getByIdProducts,
  getByNameProducts,
  postOneProduct,
  putProductById,
  deleteProductById,
} = require("./product.service");

const { isAuth } = require("../middleware/isAuth.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();

    res.send({
      status: "succes ",
      message: "get all product",
      length: products.length,
      data: products,
    });
  } catch (error) {
    res.send({ status: "error ", message: error });
  }
});

router.get("/name/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const products = await getByNameProducts(name);

    res.send({
      status: "succes",
      message: "get byname product",
      data: products,
    });
  } catch (error) {
    res.send({ status: "error ", message: error });
  }
});

router.get("/search", async (req, res) => {
  const searchTerm = req.query.name;
  try {
    const products = await getByNameProducts(searchTerm);

    res.send({
      status: "succes",
      message: "get query product",
      data: products,
    });
  } catch (error) {
    res.send({ status: "error ", message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await getByIdProducts(id);

    res.send({
      status: "succes ",
      message: "get byid product",
      data: products,
    });
  } catch (error) {
    res.send({ status: "error ", message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;

    const product = await postOneProduct(newProduct);

    res.send({
      status: "success",
      message: "create product succes",
      data: product,
    });
  } catch (error) {
    res.send({ status: "error ", message: error });
  }
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
