const router = require("express").Router();

const { api_users_signup_post,api_users_login_post } = require("../controllers/authController");

//Register
router.post('/register',api_users_signup_post)

//Login
router.post('/login',api_users_login_post)

module.exports = router