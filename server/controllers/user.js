const CryptoJS = require("crypto-js");
const User = require("../models/User");


const api_users_update = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const api_users_delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "OK", data: "User has been deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_users_find_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json({ status: "OK", data: others });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_users_all_get = async (req, res) => {
  //new is the name of our query
  const query = req.query.new;
  try {
    const allUsers = query
      ? await User.find().sort({ id: -1 }).limit(5)
      : await User.find();

    res.status(200).json({ status: "OK", data: allUsers });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const api_users_stats_get = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    //Query to get no. of users per month
    const data = await User.aggregate([
      //match the users which aregte(greater than last year)
      { $match: { createdAt: { $gte: lastYear } } },
      // take month of the  mathced items
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      //Group all of the items and return the month + total users
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.json({ status: "ok", data });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

module.exports = {
  api_users_update,
  api_users_delete,
  api_users_find_get,
  api_users_all_get,
  api_users_stats_get,
};
