import React from "react";
import { connect } from "react-redux";

import { removeCartItem } from "../../redux/actions/cartAction";

import "./Checkout.scss";

const CheckoutItem = ({ cartItem, removeCartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item ">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeCartItem })(CheckoutItem);
