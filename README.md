# Custom Stripe Checkout Example

This code implements a simple Stripe checkout sales page.

## Running the sample

1. Install dependencies

~~~
npm install
~~~

1. Set environment variables. Create a local file called `.env` that contains the following:

```
STRIPE_API_KEY=sk_test_...
YOUR_DOMAIN=http://localhost:4242
```

2. Run the server

~~~
npm start
~~~

3. Open up [http://localhost:4242/checkout.html](http://localhost:4242/checkout.html)

## Details and Customization

Stripe Checkout is the fastest way to get started with payments. This template contains three important files:

`/public` - these files are served directly as is and contain no secret information

- _checkout.html_: The actual form that users will see which initiates a post to the backend. Change this to alter how you sales page appears
- _success.html_: Displayed to users upon a successful purchase
- _winback.html_ - Displayed to users if they return from the purchase screen without completing a purchase

`/` - root files that run "on the server" and contain private information like API keys (these are stored in environment settings)

- server.js: exposes one endpoint called `/create-checkout-session` that answers the post request from the client facing form and forwards the user to a payment page
