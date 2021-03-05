import { Button, Modal } from "antd";
import SelectSize from "components/SelectSize/SelectSize";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addInBag, Product, removeInWishList } from "store/bag/reducer";
import "./CustomModal.scss";

interface Props {
  isModalVisible: boolean;
  product: {
    images: string[];
    color: string[];
    brandName: string;
    productName: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    id: string;
  };
  handleModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const CustomModal: React.FC<Props> = ({ isModalVisible, handleModalVisible, product }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowSizeError(false);
  }, [selectedSize]);
  return (
    <Modal
      width={450}
      title="Select Size"
      visible={isModalVisible}
      onCancel={() => handleModalVisible(false)}
      footer={
        <button
          onClick={() => {
            if (!selectedSize) {
              setShowSizeError(true);
            } else {
              dispatch(
                addInBag({
                  ...product,
                  selectedSize,
                })
              );
              dispatch(removeInWishList(product.id));
              handleModalVisible(false);
            }
          }}
          className="bag-done"
        >
          Done
        </button>
      }
    >
      <div className="customModal">
        <div className="info">
          <img src={product.images[0]} alt="" />
          <div className="contentPrice contentPriceAlt">
            <p className="brandName">{product.brandName}</p>
            <p className="productName">{product.productName}</p>
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
        <SelectSize sizes={[38, 40, 42, 44]} selectedSize={(size) => setSelectedSize(size)} showSizeError={showSizeError} />
      </div>
    </Modal>
  );
};
export default CustomModal;
