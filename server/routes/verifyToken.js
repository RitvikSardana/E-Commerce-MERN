const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err) return res.status(401).json({error:"Invalid Token!"})
            req.user = user;
            next();

        })
    }
    else {
        return res.status(401).json({error:"You are not authenticated!"})
    }
}

const verifyTokenAuth = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if (req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json({error:"Permission Denied"})
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) =>{
    verifyToken(req,res,()=>{

        if (req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json({error:"Permission Denied"})
        }
    })
}

module.exports = {
    verifyTokenAuth,
    verifyTokenAndAdmin
}