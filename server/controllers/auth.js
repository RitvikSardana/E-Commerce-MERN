const User = require("../models/User");
const CryptoJS = require("crypto-js")
const jwt  = require('jsonwebtoken');

const api_users_signup_post = async (req, res) => {
  let { username, email, password } = req.body;

  password = CryptoJS.AES.encrypt(password,process.env.PASSWORD_SECRET_KEY).toString()
  
//   console.log(username, email, password);

  if (!username || !email || !password) {
    res.status(400).json({status:"error",error:"Please Put all the details"});
    return;
  }
  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    const savedUser = await newUser.save();
    //201 is saved succesfully
    res.status(201).json({status:"ok",user:savedUser});
  } catch (err) {
    res.status(500).json({status:err,error:"Duplicate Mail"});
  }


};

const api_users_login_post = async (req,res)=>{
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
  
      const token = jwt.sign({
          id:user.id,
          isAdmin:user.isAdmin
      },process.env.JWT_SECRET_KEY,{expiresIn:"3d"})
  
      const {password,...others} = user._doc;
  
      res.status(200).json({status:"ok",data:{...others,token}})
    }
    catch (err){
      res.status(500).json({"status":err})
    }
  
  }


module.exports = {
  api_users_signup_post,
  api_users_login_post
};
