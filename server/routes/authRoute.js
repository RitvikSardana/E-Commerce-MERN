const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")

const { api_users_signup } = require("../controllers/authController");

//Register
router.post('/register',api_users_signup)

//Login
router.post('/login',async (req,res)=>{
  let { username, password2 } = req.body;

  try{

    const user = await User.findOne({username})
    !user && res.status(401).json({status:"error",error:"Wrong Credentials"})
    const passwordHashed = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET_KEY
    );
    const originalPassword = passwordHashed.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password && res.status(401).json({error:"Wrong Credentials"})

    const {password,...others} = user._doc;

    res.status(200).json({status:"ok",data:others})
  }
  catch (error){
    res.status(500).json(error)
  }

})

module.exports = router