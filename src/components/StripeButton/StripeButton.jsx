import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_EB8uSKsM1XmBDprzc60L0zxz00wEMnCQQ5";
  const handleToken = token => {
    console.log(token);
    alert("Payment successfulll");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Shop Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
