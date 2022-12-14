const Product = require("../models/Product");

const api_products_post = async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(newProduct);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json({ status: "ok", data: savedProduct });
  } catch (err) {
    res.status(500).json({ status: "Duplicate Product Found", error: err });
  }
};

const api_products_put = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ status: "ok", user: updatedProduct });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_products_delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "OK", data: "Product has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_single_product_get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({ status: "OK", data: product });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_all_products_get = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        //Find Categories jiskei which has qCategory
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json({ status: "OK", data: products });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

module.exports = {
    api_products_post,
    api_products_put,
    api_products_delete,
    api_single_product_get,
    api_all_products_get,
}