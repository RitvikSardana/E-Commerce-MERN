const router = require("express").Router();
const {
  api_users_update,
  api_users_delete,
  api_users_find_get,
  api_users_all_get,
  api_users_stats_get,
} = require("../controllers/user");
const { verifyTokenAuth, verifyTokenAndAdmin } = require("./verifyToken");

//UPDATE USER
//adding middleware to verify JWT Token
router.put("/:id", verifyTokenAuth, api_users_update);

//DELETE USER
router.delete("/:id", verifyTokenAuth, api_users_delete);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, api_users_find_get);

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, api_users_all_get);

//GET Users Stats
router.get("/stats", verifyTokenAndAdmin, api_users_stats_get);

module.exports = router;
