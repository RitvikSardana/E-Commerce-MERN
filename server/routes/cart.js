const router = require("express").Router();
const {
  api_cart_post,
  api_cart_put,
  api_cart_delete,
  api_user_cart_get,
  api_all_users_cart_get,
} = require("../controllers/cart");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE Cart
router.post("/", verifyTokenAuth, api_cart_post);

//UPDATE
router.put("/:id", verifyTokenAuth, api_cart_put);

//DELETE
router.delete("/:id", verifyTokenAuth, api_cart_delete);

//GET User Cart
router.get("/:id", verifyTokenAuth, api_user_cart_get);

//GET All Users Cart
router.get("/", verifyTokenAndAdmin, api_all_users_cart_get);

module.exports = router;
