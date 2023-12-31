const prisma = require("../db");

const findAllCategory = async () => {
  const category = await prisma.category.findMany({
    include: { products: true },
  });

  return category;
};

const findByIdCategory = async (id) => {
  const category = await prisma.category.findMany({
    where: { id: id },
    include: { products: true },
  });

  return category;
};

const findByNameCategory = async (name) => {
  const category = await prisma.category.findMany({
    where: { name: name },
    include: { products: true },
  });

  return category;
};

const createCategory = async (name) => {
  const category = await prisma.category.create({
    data: {
      name,
    },
  });

  return category;
};

const deleteCategory = async (id) => {
  const category = await prisma.category.delete({
    where: { id: id },
  });

  return category;
};

module.exports = {
  findAllCategory,
  findByIdCategory,
  findByNameCategory,
  createCategory,
  deleteCategory,
};
