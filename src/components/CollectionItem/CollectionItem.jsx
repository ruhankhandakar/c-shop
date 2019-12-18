import React from "react";
import { connect } from "react-redux";

import { addCartItem } from "../../redux/actions/cartAction";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyle";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addCartItem })(CollectionItem);
