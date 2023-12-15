const prisma = require("../db");

const findAllProduct = async () => {
  const product = await prisma.product.findMany();

  return product;
};

const findByIdProduct = async (id) => {
  const product = await prisma.product.findMany({
    where: { id: parseInt(id) },
  });

  return product;
};

const findByNameProduct = async (name) => {
  const product = await prisma.product.findMany({
    where: { name: name },
  });

  return product;
};

const createProduct = async (newProduct) => {
  const product = await prisma.product.create({
    data: {
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      rating: newProduct.rating,
      image: newProduct.image,
      stock: 100,
      category: {},
    },
  });

  return product;
};

const updateProduct = async (id, name, price, description, rating, image) => {
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { name, price, description, rating, image },
  });

  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  findAllProduct,
  findByIdProduct,
  findByNameProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
