const router = require("express").Router();

const Cart = require("../models/Cart");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE Cart

router.post("/", verifyTokenAuth, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json({status:"ok",data:savedCart});
  } catch (err) {
    res.status(500).json({ status: "Duplicate Product Found", error: err });
  }
});

//UPDATE
router.put("/:id", verifyTokenAuth, async (req, res) => {
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
});

//DELETE
router.delete("/:id", verifyTokenAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "ok", data: "Cart Product has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });

  }
});

//GET User Cart
router.get("/:id", verifyTokenAuth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json({ status: "ok", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

//GET All Users Cart
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json({status:"ok",data:carts})

  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

module.exports = router;
