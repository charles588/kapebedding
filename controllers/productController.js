const Product = require("../models/product");

// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc   Add new product
// @route  POST /api/products
// @access Public (later: Admin only)
const addProduct = async (req, res) => {
  const { name, image, description, price } = req.body;

  if (!name || !image || !price) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const product = new Product({ name, image, description, price });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = { getProducts, addProduct };
