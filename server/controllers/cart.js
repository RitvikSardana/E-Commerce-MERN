const Cart = require("../models/Cart");

const api_cart_post = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json({ status: "ok", data: savedCart });
  } catch (err) {
    res.status(500).json({ status: "Duplicate Product Found", error: err });
  }
};

const api_cart_put = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ status: "ok", data: updatedCart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_cart_delete = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "ok", data: "Cart Product has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_user_cart_get = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json({ status: "ok", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_all_users_cart_get = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({ status: "ok", data: carts });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

module.exports = {
    api_cart_post,
    api_cart_put,
    api_cart_delete,
    api_user_cart_get,
    api_all_users_cart_get
}
