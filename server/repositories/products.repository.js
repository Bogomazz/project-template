const CategoriesMap = require('./categories.map');
let productsIdCounter = 1;

function add(categoryId, product) {
  const category = CategoriesMap.get(categoryId);
  const id = productsIdCounter++;
  const updatedProduct = {
    ...product,
    id,
  }
  category.products.push(updatedProduct);
  return updatedProduct;
}

function update(categoryId, productId, data) {
  const category = CategoriesMap.get(categoryId);
  let productIndex;
  const product = category.products.find((productItem, index) => {
    if (productItem.id === productId) {
      productIndex = index;
      return true;
    }
  });

  const updatedProduct = {
    ...product, 
    ...data,
    id: productId
  };

  category.products.splice(productIndex, 1, updatedProduct);
  return category.products.find(p => p.id === productId);
}

function remove(categoryId, productId) {
  const category = CategoriesMap.get(categoryId);
  const productIndex = category
    .products
    .findIndex(productItem => productItem.id === productId);

  category.products.splice(productIndex, 1);
  return category.products.find(p => p.id === productId);
}

module.exports = {
  add,
  update,
  remove,
}