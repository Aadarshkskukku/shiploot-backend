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
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
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
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
