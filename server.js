// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

const YOUR_DOMAIN = process.env.YOUR_DOMAIN;;

app.post('/create-checkout-session', async (req, res) => {
  const price = req.body.price;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: price,
          currency: 'cad',
          product_data: {
            name: `You will pay ${(price / 100).toFixed(2)}`
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/winback.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('🍉 Running on http://localhost:4242/'));