import Layout from "containers/Layout/Layout";
import List from "containers/List/List";
import React from "react";
import { message, Modal } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";
import "./BagPage.scss";
import { clearBag } from "store/bag/reducer";
import Empty from "utils/Empty";

interface Props {}
const BagPage: React.FC<Props> = ({}) => {
  const bag = useSelector((state: AppState) => state.bag.bag);
  let totalAmount = 0;
  const dispatch = useDispatch();
  bag.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  return (
    <Layout>
      {bag.length > 0 ? (
        <div className="bagPage">
          <div className="bag-list">
            <h1 className="pageTitle">Bag</h1>
            <List products={bag} />
          </div>
          <div className="summary">
            <h1>
              Total Amount: <span>{totalAmount}</span>
            </h1>
            <button
              onClick={() => {
                message.success("Successfully Purchased");
                dispatch(clearBag());
              }}
            >
              Buy
            </button>
          </div>
        </div>
      ) : (
        <Empty name="Your Bag is Empty" />
      )}
    </Layout>
  );
};
export default BagPage;
