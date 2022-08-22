const router = require("express").Router();

const {
  api_products_post,
  api_products_put,
  api_products_delete,
  api_single_product_get,
  api_all_products_get,
} = require("../controllers/product");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE
//Only Admin Can create New Products
router.post("/", verifyTokenAndAdmin, api_products_post);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, api_products_put);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, api_products_delete);

//GET Product
router.get("/find/:id", api_single_product_get);

//GET All Products
router.get("/", api_all_products_get);

module.exports = router;
