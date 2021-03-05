import CardList from "containers/CardList/CardList";
import Layout from "containers/Layout/Layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import "./Wishlist.scss";

interface Props {}
const Wishlist: React.FC<Props> = ({}) => {
  const wishList = useSelector((state: AppState) => state.bag.wishList);
  return (
    <Layout>
      <div className="wishlist">
        <div className="title">
          <h1>My WishList</h1> <span>{wishList.length} Items</span>
        </div>
        <CardList data={wishList} forWishlist />
      </div>
    </Layout>
  );
};
export default Wishlist;
