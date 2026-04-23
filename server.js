const express = require("express");
const Razorpay = require("razorpay");
const Stripe = require("stripe");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Razorpay
const razorpay = new Razorpay({
  key_id: "rzp_test_xxxxx",
  key_secret: "xxxxxxxx",
});

// Stripe
const stripe = new Stripe("sk_test_xxxxx");

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  const options = {
    amount: 500 * 100,
    currency: "INR",
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
