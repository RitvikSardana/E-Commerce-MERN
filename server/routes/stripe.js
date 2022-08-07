const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)


router.post('/payment',async (req,res) =>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        curreny:"usd"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json({status:"error",error:stripeErr})
        }
        else {
            res.status(200).json({status:"ok",data:stripeRes})
            
        }
    })
})

module.exports=router;