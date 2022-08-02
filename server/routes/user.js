const router = require('express').Router();
const {api_user_test} = require('../controllers/userRoutes')

router.get("/usertest",api_user_test)

module.exports = router