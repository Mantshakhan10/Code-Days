const express = require("express");
const {
  createProduct,
  getAllProducts,
  searchProducts,
  paginateProducts
} = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/search", searchProducts);
router.get("/paginate", paginateProducts);

module.exports = router;
