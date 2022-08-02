const User = require("../models/User");
const CryptoJS = require("crypto-js")


const api_users_signup = async (req, res) => {
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
    console.log("error is",err);
    res.status(500).json({status:err,error:"Duplicate Mail"});
  }


};

module.exports = {
  api_users_signup,
};
