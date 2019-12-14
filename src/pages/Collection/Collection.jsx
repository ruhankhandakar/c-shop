import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectShopCollection } from "../../utils/shopSelector";

import "./Collection.scss";

const Collection = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">{collection.title}</h2>
    <div className="items">
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
