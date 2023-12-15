const {
  findAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product.repository");

const getAllProducts = async () => {
  const product = await findAllProduct();

  return product;
};

const postOneProduct = async (newProduct) => {
  const product = await createProduct(newProduct);

  return product;
};

const putProductById = async (id, name, price, description, rating, image) => {
  const product = await updateProduct(
    id,
    name,
    price,
    description,
    rating,
    image
  );
  return product;
};

const deleteProductById = async (id) => {
  await deleteProduct(id);
};

module.exports = {
  getAllProducts,
  postOneProduct,
  putProductById,
  deleteProductById,
};
