import { CaretDownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React, { useEffect } from "react";
import dayjs from "dayjs";

import { useDispatch, useSelector } from "react-redux";
import { addInWishlist, Product, removeInBag, updateInBag } from "store/bag/reducer";
import "./ListItem.scss";
import { Link } from "react-router-dom";
import { setTotalAmount } from "store/common/reducer";
import { AppState } from "store/store";

interface Props {
  product: Product;
}

const ListItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { quantity = 1 } = useSelector((state: AppState) => state.bag.bag).find((item) => item.id === product.id) as Product;
  const selectedSizeString = product.selectedSize?.toString() as string;
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    dispatch(setTotalAmount(quantity * product.price));
  }, [quantity]);

  const menu = (
    <Menu
      defaultSelectedKeys={[selectedSizeString]}
      onClick={(e: any) => {
        dispatch(
          updateInBag({
            ...product,
            selectedSize: parseInt(e.key),
          })
        );
      }}
    >
      <Menu.Item key={"38"}>
        <button>38</button>
      </Menu.Item>
      <Menu.Item key={"40"}>
        <button>40</button>
      </Menu.Item>
      <Menu.Item key={"42"}>
        <button>42</button>
      </Menu.Item>
      <Menu.Item key={"44"}>
        <button>44</button>
      </Menu.Item>
    </Menu>
  );

  const quantityMenu = (
    <Menu
      defaultSelectedKeys={[selectedSizeString]}
      onClick={(e: any) => {
        dispatch(
          updateInBag({
            ...product,
            quantity: parseInt(e.key),
          })
        );
      }}
    >
      <Menu.Item key={"1"}>
        <button>1</button>
      </Menu.Item>
      <Menu.Item key={"2"}>
        <button>2</button>
      </Menu.Item>
      <Menu.Item key={"3"}>
        <button>3</button>
      </Menu.Item>
      <Menu.Item key={"4"}>
        <button>4</button>
      </Menu.Item>
    </Menu>
  );
  return !!product.brandName ? (
    <div className="listItem">
      <div className="main">
        <Link to={`/shirts/${product.id}`} className="image">
          <img src={product.images[0]} alt={product.productName} />
        </Link>
        <div className="info">
          <div className="columns">
            <div className="column1">
              <h1 className="brandName">{product.brandName}</h1>
              <p className="productName">{product.productName}</p>
              <p className="soldBy">Sold By: Omnitech Retail</p>
            </div>
            <div className="column2">
              <div className="price">Rs. {quantity * product.price}</div>
              <div className="discount">
                <p className="orignalPrice">{quantity * product.originalPrice}</p>
                <p className="discountRange"> {product.discountPercent}% OFF</p>
              </div>
            </div>
          </div>
          <div className="dropdowns">
            <div>
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button>
                  <span style={{ fontWeight: "bolder", paddingRight: "4px" }}>Size: </span> {product.selectedSize} <CaretDownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div>
              <Dropdown overlay={quantityMenu} placement="bottomLeft">
                <Button>
                  <span style={{ fontWeight: "bolder", paddingRight: "4px" }}>Qty: </span> {quantity} <CaretDownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>

          <div className="checks">
            <div>
              <CheckOutlined /> Delivery by {dayjs(tomorrow).format("D MMMM")}
            </div>
            <div>
              <CheckOutlined /> Eligible for Try & Buy
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="remove" onClick={() => dispatch(removeInBag(product.id))}>
          remove
        </button>
        <button
          className="add-wishlist"
          onClick={() => {
            dispatch(removeInBag(product.id));
            dispatch(addInWishlist(product));
          }}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default ListItem;
