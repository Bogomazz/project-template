const CategoriesMap = require('./categories.map');
let categoriesIdCounter = 1;

function getAll() {
  return Array.from(CategoriesMap.values());
}

function getById(id) {
  return CategoriesMap.get(id);
}

function add(categoryName) {
  const id = categoriesIdCounter++;
  CategoriesMap.set(id, {
    name: categoryName,
    products: [],
    id
  });

  return CategoriesMap.get(id);
}

function updateCategoryName(id, name) {
  const category = CategoriesMap.get(id);
  category.name = name;
  CategoriesMap.set(id, category);
  return CategoriesMap.get(id);
}

function removeCategory(id) {
  CategoriesMap.delete(id);
}

module.exports ={
  getAll,
  getById,
  add,
  updateCategoryName,
  removeCategory,
}