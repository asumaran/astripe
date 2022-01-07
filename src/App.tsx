import React from "react";
import "./index.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ""
);

function App() {
  const options = {
    clientSecret: process.env.REACT_APP_STRIPE_CLIENT_SECRET,
  };

  return (
    <div className="app">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
