import { Carousel } from "antd";
import { CopyOutlined, HeartOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

import React, { useState } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInWishlist } from "store/bag/reducer";

export interface CardProp {
  id: string;
  brandName: string;
  productName: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  images: string[];
}

const Card: React.FC<CardProp> = ({ images, brandName, productName, price, originalPrice, discountPercent, id }) => {
  const [autoPlay, setAutoPlay] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const [insideWishList, setInsideWishList] = useState(false);
  const toggleAddToWishList = () => {
    setInsideWishList(!insideWishList);
    dispatch(
      addInWishlist({
        images,
        brandName,
        productName,
        price,
        originalPrice,
        discountPercent,
        id,
      })
    );
  };
  return (
    <div className="card" onMouseOver={() => setAutoPlay(true)} onMouseLeave={() => setAutoPlay(false)}>
      <Link to={"/shirts/" + id} className="imageContainer">
        <Carousel autoplay={autoPlay} dots={false}>
          {images.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </Carousel>
      </Link>
      <div
        className="similar"
        onClick={(event) => {
          setDrawerVisible(true);
        }}
      >
        <button>
          <CopyOutlined />
        </button>
      </div>
      <div className="wishlist">
        <button onClick={toggleAddToWishList} className={insideWishList ? "buttonActive" : ""}>
          <HeartOutlined /> Wishlist
        </button>
      </div>
      <Link to={"/shirts/" + id}>
        <div className="content">
          <p className="brand">{brandName}</p>
          <p className="product">{productName}</p>
          <div className="priceContainer">
            <span className="price">Rs. {price}</span>
            <span className="originalPrice">Rs. {originalPrice}</span>
            <span className="discount">{discountPercent}%</span>
          </div>
        </div>
      </Link>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        width={512}
        closeIcon={true}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default Card;
