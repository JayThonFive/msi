const ProductService = require("../services/productServicesAdmin");
 
exports.getAllProducts = async (req, res) => {
  try {
    const Products = await ProductService.getAllProducts();
    res.json({ data: Products, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createProduct = async (req, res) => {
  try {
    const Product = await ProductService.createProduct(req.body);
    res.json({ data: Product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getProductById = async (req, res) => {
  try {
    const Product = await ProductService.getProductById(req.params.id);
    res.json({ data: Product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateProduct = async (req, res) => {
  try {
    const Product = await ProductService.updateProduct(req.params.id, req.body);
    res.json({ data: Product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteProduct = async (req, res) => {
  try {
    const Product = await ProductService.deleteProduct(req.params.id);
    res.json({ data: Product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};