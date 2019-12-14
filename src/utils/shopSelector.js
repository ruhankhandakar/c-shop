import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollection = collectionParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
