import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { addCartItem } from "../../redux/actions/cartAction";

import "./CollectionItem.scss";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(null, { addCartItem })(CollectionItem);
