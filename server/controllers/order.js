const Order = require("../models/Order");

const api_orders_post = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({ status: "ok", data: savedOrder });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_all_users_orders_get = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ status: "ok", data: orders });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_user_orders_get = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json({ status: "ok", data: orders });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_orders_income_get = async (req, res) => {

  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth }, ...(productId && {
        products: {
$elemMatch:{productId}}
      } ) } },
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
};

const api_orders_put = async (req, res) => {
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
};

const api_orders_delete = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "ok", data: "Order has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

module.exports = {
    api_orders_post,
    api_all_users_orders_get,
    api_user_orders_get,
    api_orders_income_get,
    api_orders_put,
    api_orders_delete,
}
