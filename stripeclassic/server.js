const stripe = require("stripe")(
  "sk_test_51JKTsvIBX7TlKpWByria43yOJ0T8cxBw0SirF8uteDrb4xz11qHLSQQtbJUvN9djiavDN5QToi1GBInWRZdCtBip00vgVBZ3EO"
);
const express = require("express");
const app = express();
app.use(express.static("."));

const domain = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JKURVIBX7TlKpWBmP91oRyp"],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: [
      {
        price: "price_1JKUOIIBX7TlKpWBQbvXRfRM",
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}/success.html`,
    cancel_url: `${domain}/cancel.html`,
  });

  res.redirect(303, session.url);
});
app.listen(3000, () => console.log('Running on port 3000'));
