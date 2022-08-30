const router = require("express").Router();

const {
  api_orders_post,
  api_all_users_orders_get,
  api_user_orders_get,
  api_orders_income_get,
  api_orders_put,
  api_orders_delete,
} = require("../controllers/order");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE Order
router.post("/", verifyTokenAuth, api_orders_post);

//GET All Users Orders
router.get("/", verifyTokenAndAdmin, api_all_users_orders_get);

//GET User Orders
router.get("/find/:userId", verifyTokenAuth, api_user_orders_get);

// Get Monthly Income
router.get("/income", verifyTokenAndAdmin, api_orders_income_get);

//UPDATE Cart
router.put("/:id", verifyTokenAndAdmin, api_orders_put);

//DELETE Cart
router.delete("/:id", verifyTokenAndAdmin, api_orders_delete);

module.exports = router;
