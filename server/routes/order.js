const router = require("express").Router();

const Order = require("../models/Order");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE Order
router.post("/", verifyTokenAuth, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({ status: "ok", data: savedOrder });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

//GET All Users Cart
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ status: "ok", data: orders });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

//GET User Orders
router.get("/find/:userId", verifyTokenAuth, async (req, res) => {
  try {
    const orders = await Order.find({userId:req.params.userId});
    res.status(200).json({ status: "ok", data: orders });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});


// Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(
    new Date().setMonth(lastMonth.getMonth() - 1)
  );
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json({ status: "ok", data: income });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ status: "ok", data: updatedOrder });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "ok", data: "Order has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});







module.exports = router;
