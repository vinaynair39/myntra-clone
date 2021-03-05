import Card, { CardProp } from "components/Card/Card";
import React from "react";
import { useSelector } from "react-redux";
import { Product } from "store/bag/reducer";
import { AppState } from "store/store";
import Empty from "utils/Empty";
import "./CardList.scss";

interface Props {
  data: CardProp[];
  forWishlist: boolean;
}
const CardList: React.FC<Props> = ({ data, forWishlist }) => {
  const wishlist = useSelector((state: AppState) => state.bag.wishList);
  return data.length > 0 ? (
    <div className="cardList">
      {data.map((item) => {
        let wishListed = false;
        wishlist.forEach((wishListItem) => {
          wishListed = wishListItem.id === item.id;
        });
        return <Card {...item} wishListed={wishListed} forWishlist={forWishlist} key={item.id} />;
      })}
    </div>
  ) : (
    <Empty name="No similar products" drawer={true} />
  );
};
export default CardList;
