const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");
const router = express.Router();

router.route("/")
  .get(getProducts)   // GET /api/products
  .post(addProduct);  // POST /api/products

module.exports = router;
