const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const productSchema = new Schema({
  talla: String,
  color: String,
  cantidad: Number,
  precio: Number,
  foto: String,
  product_id: String, 
});
 
module.exports = mongoose.model("products", productSchema);