const {
  findAllCategory,
  findByIdCategory,
  findByNameCategory,
  createCategory,
  deleteCategory,
} = require("./category.repository");

const getAllCategory = async () => {
  const category = await findAllCategory();
  return category;
};

const getByIdCategory = async (id) => {
  const category = await findByIdCategory(id);
  return category;
};

const getByNameCategory = async (name) => {
  const category = await findByNameCategory(name);
  return category;
};

const postOneCategory = async (name) => {
  const category = await createCategory(name);
  return category;
};

const deleteOneCategory = async (id) => {
  const category = await deleteCategory(id);
  return category;
};

module.exports = {
  getAllCategory,
  getByIdCategory,
  getByNameCategory,
  postOneCategory,
  deleteOneCategory,
};
