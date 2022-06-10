const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51L8KfmSCWfpP149b4DHZVorqH0I1676gn3oGdrmcnvEES16gJb3SgoqR9K68TQCTUBCoLbMgB5MWpTut2nYeYpZq00PypvEsLL"
);

router.post("/payment", async (req, res) => {
  const paymentIntent = await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: req.body.payment_method_types,
      payment_method: req.body.payment_method,
      confirmation_method: "manual",
      confirm: true,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
  return paymentIntent;
});
module.exports = router;
