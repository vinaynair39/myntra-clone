import ListItem from "components/ListItem/ListItem";
import React, { useState } from "react";
import { Product } from "store/bag/reducer";
import "./List.scss";

interface Props {
  products: Product[];
}
const List: React.FC<Props> = ({ products }) => {
  return (
    <div className="list">
      {products.map((item) => {
        return <ListItem product={item} key={item.id} />;
      })}
    </div>
  );
};
export default List;
