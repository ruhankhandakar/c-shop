import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "./actionType";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: ADD_CART_ITEM,
  payload: item
});
