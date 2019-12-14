import React from "react";
import { connect } from "react-redux";

import {
  removeCartItem,
  addCartItem,
  removeItem
} from "../../redux/actions/cartAction";

import "./Checkout.scss";

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  addCartItem,
  removeItem
}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item ">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeCartItem, addCartItem, removeItem })(
  CheckoutItem
);
