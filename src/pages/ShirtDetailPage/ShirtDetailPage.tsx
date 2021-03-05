import { ArrowRightOutlined, CommentOutlined, HeartOutlined, ShoppingFilled } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import SelectSize from "components/SelectSize/SelectSize";
import Layout from "containers/Layout/Layout";
import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addInBag, addInWishlist, Product, removeInWishList } from "store/bag/reducer";
import { AppState } from "store/store";
import "./ShirtDetailPage.scss";

interface Props {}
const Detail: React.FC<Props> = ({}) => {
  const { id } = useParams() as { id: string };
  const product = useSelector((state: AppState) => state.bag.allProducts).find((item) => item.id === id) as Product;
  const inWishList = useSelector((state: AppState) => state.bag.wishList).findIndex((item) => item.id === id) >= 0;
  console.log(inWishList);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  const [insideWishList, setInsideWishList] = useState(inWishList);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowSizeError(false);
  }, [selectedSize]);

  const toggleAddToWishList = () => {
    setInsideWishList(!insideWishList);
    if (insideWishList) {
      dispatch(removeInWishList(id));
    } else {
      dispatch(addInWishlist(product));
    }
  };
  return (
    <Layout>
      <div className="detail">
        <div className="row1">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Clothing</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span>Shirts For Men & Women</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="breadcrumbItem">{product.productName}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="main">
          <div className="images">
            {product.images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="image"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                >
                  <img src={image} className="imageTag" alt="" />
                </div>
              );
            })}
          </div>
          <div className="content">
            <div className="name">
              <h1>{product.brandName}</h1>
              <h2>{product.productName}</h2>
            </div>
            <button className="reviews">
              <CommentOutlined />
              {product.numberOfReviews} Reviews
            </button>
            <div className="border"></div>
            <div className="contentPrice">
              <div className="row1">
                <p className="price">RS. {product.price}</p>
                <p className="originalPrice">{product.originalPrice}</p>
                <p className="discount">{`(${product.discountPercent}% OFF)`}</p>
              </div>
              <div className="row2">inclusive of all taxes</div>
            </div>
            <SelectSize sizes={[38, 40, 42, 44, 46]} selectedSize={(size) => setSelectedSize(size)} showSizeError={showSizeError} />
            <div className="buttons">
              {addedToBag ? (
                <Link to="/bag" className="bag bag2">
                  Go to Bag <ArrowRightOutlined />
                </Link>
              ) : (
                <button
                  className="bag"
                  onClick={() => {
                    if (!selectedSize) setShowSizeError(true);
                    else {
                      setAddedToBag(true);
                      dispatch(
                        addInBag({
                          ...product,
                          quantity: 1,
                          selectedSize,
                        })
                      );
                    }
                  }}
                >
                  <ShoppingFilled /> Add To Bag
                </button>
              )}

              <button className={insideWishList ? "wishlist-active" : "wishlist"} onClick={toggleAddToWishList}>
                <HeartOutlined /> Wishlist
              </button>
            </div>
            <div className="border"></div>
            <div className="contentPrice contentPriceAlt">
              <div className="row1">
                <p className="price">RS. {product.price}</p>
                <p className="originalPrice">{product.originalPrice}</p>
                <p className="discount">{`(${product.discountPercent}% OFF)`}</p>
              </div>
              <div className="row2">
                Seller: <span>Omnitech Retail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={product.images[photoIndex]}
          nextSrc={product.images[(photoIndex + 1) % product.images.length]}
          prevSrc={product.images[(photoIndex + product.images.length - 1) % product.images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + product.images.length - 1) % product.images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + product.images.length + 1) % product.images.length)}
        />
      )}
    </Layout>
  );
};
export default Detail;
