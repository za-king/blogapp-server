const prisma = require("../db");

const findAllCategory = async () => {
  const category = await prisma.category.findMany();

  return category;
};

const findByIdCategory = async (id) => {
  const category = await prisma.category.findMany({
    where: { id: parseInt(id) },
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
    where: { id: parseInt(id) },
  });

  return category;
};

module.exports = {
  findAllCategory,
  findByIdCategory,
  createCategory,
  deleteCategory,
};
