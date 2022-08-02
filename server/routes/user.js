const router = require('express').Router();
const {api_user_test} = require('../controllers/userController')

router.get("/usertest",api_user_test)

router.post('/usertest',(req,res) =>{
    const username = req.body.username;
    // const password = req.body.password;
    console.log(username);
    res.status(200).send("OK")
})

module.exports = router