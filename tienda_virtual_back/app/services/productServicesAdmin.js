const ProductModel = require("../models/products");
 
exports.getAllProducts = async () => {
  console.log("Services: ingresa");
  return await ProductModel.find();
};
 
exports.createProduct = async (Product) => {
  return await ProductModel.create(Product);
};
exports.getProductById = async (id) => {
  return await ProductModel.findById(id);
};
 
exports.updateProduct = async (id, Product) => {
  return await ProductModel.findByIdAndUpdate(id, Product);
};
 
exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};