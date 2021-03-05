import { Carousel } from "antd";
import { CloseOutlined, CopyOutlined, HeartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInWishlist, removeInWishList } from "store/bag/reducer";
import { setShowSimilar } from "store/common/reducer";
import "./Card.scss";
import CustomModal from "utils/CustomModal";

export interface CardProp {
  id: string;
  brandName: string;
  productName: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  images: string[];
  color: string[];
}

const Card: React.FC<CardProp & { wishListed: boolean; forWishlist?: boolean }> = ({
  images,
  color,
  brandName,
  productName,
  price,
  originalPrice,
  discountPercent,
  id,
  wishListed,
  forWishlist = false,
}) => {
  const [autoPlay, setAutoPlay] = useState(false);
  const dispatch = useDispatch();
  const [insideWishList, setInsideWishList] = useState(wishListed);
  const [showModal, setShowModal] = useState(false);

  const toggleAddToWishList = () => {
    setInsideWishList(!insideWishList);
    if (insideWishList) {
      dispatch(removeInWishList(id));
    } else {
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
    }
  };
  return (
    <div className={forWishlist ? "card card-wishlist" : "card"} onMouseOver={() => setAutoPlay(true)} onMouseLeave={() => setAutoPlay(false)}>
      <Link to={"/shirts/" + id} className="imageContainer">
        <Carousel autoplay={autoPlay} dots={false}>
          {images.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </Carousel>
      </Link>
      <div
        className="similar"
        onClick={() => {
          dispatch(
            setShowSimilar({
              query: color.join(" "),
              id,
            })
          );
        }}
      >
        <button>
          <CopyOutlined />
        </button>
      </div>
      {forWishlist && (
        <div
          className="removeFromWishlist"
          onClick={() => {
            dispatch(removeInWishList(id));
          }}
        >
          <button>
            <CloseOutlined />
          </button>
        </div>
      )}
      {!forWishlist && (
        <div className="wishlist">
          <button onClick={toggleAddToWishList} className={insideWishList ? "buttonActive" : ""}>
            <HeartOutlined /> Wishlist
          </button>
        </div>
      )}
      <Link to={"/shirts/" + id}>
        <div className="content">
          {!forWishlist && <p className="brand">{brandName}</p>}
          <p className="product">{productName}</p>
          <div className="priceContainer">
            <span className="price">Rs. {price}</span>
            <span className="originalPrice">Rs. {originalPrice}</span>
            <span className="discount">{discountPercent}%</span>
          </div>
        </div>
      </Link>
      {forWishlist && (
        <div className="moveToBag">
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Move To bag
          </button>
        </div>
      )}
      <CustomModal
        handleModalVisible={setShowModal}
        isModalVisible={showModal}
        product={{ images, color, brandName, productName, price, originalPrice, discountPercent, id }}
      />
    </div>
  );
};
export default Card;
