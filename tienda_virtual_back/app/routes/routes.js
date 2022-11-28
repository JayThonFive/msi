const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
 
const router = express.Router();
 
router.route("/getProductos").get(getAllProducts);
router.route("/createProducto").post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);
 
module.exports = router;