const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  // console.log(req.body);
  stripe.paymentIntents.create(
    {
      amount: req.body.amount,
    //   customer:req.body.tokenId,
      currency: "inr",
      payment_method_types: ["card"],
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({ status: "error", error: stripeErr });
        console.log("ERROR", stripeErr);
      } else {
        res.status(200).json({ status: "ok", data: stripeRes });
        // console.log(stripeRes);
      }
    }
  );
});

module.exports = router;
