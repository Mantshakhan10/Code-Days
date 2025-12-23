const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ message: "All fields required" });
    }

    const product = await Product.create(req.body);
    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// SEARCH + FILTER
exports.searchProducts = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter);
    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PAGINATION + SORTING
exports.paginateProducts = async (req, res) => {
  try {
    let { page = 1, limit = 5, sort = "price" } = req.query;

    page = Number(page);
    limit = Number(limit);

    const products = await Product.find()
      .sort({ [sort]: 1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      page,
      limit,
      data: products
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
