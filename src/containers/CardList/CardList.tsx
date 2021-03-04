import Card, { CardProp } from "components/Card/Card";
import React from "react";
import { Product } from "store/bag/reducer";
import "./CardList.scss";

interface Props {
  data: CardProp[];
}
const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};
export default CardList;
