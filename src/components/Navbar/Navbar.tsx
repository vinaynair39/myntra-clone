import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { ReactComponent as Bag } from "assets/bag.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Profile } from "assets/profile.svg";
import { ReactComponent as Search } from "assets/search.svg";
import { setTextFilter } from "store/filter/reducer";
import styles from "./Navbar.module.scss";
import { AutoComplete } from "antd";
import { useDispatch } from "react-redux";

interface Props {}
const Navbar: React.FC<Props> = ({}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };
  const onSearch = (data: string) => {
    setValue(data);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <Link to="/shop/men">MEN</Link>
        <Link to="/shop/women">WOMEN</Link>
        <Link to="/shop/kids">KIDS</Link>
        <Link to="/shop/home-living">HOME & LIVING</Link>
        <Link to="/shop/offers">OFFERS</Link>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.searchbarIcon}>
          <Search />
        </div>
        {/* <AutoComplete className={styles.input} onSelect={onSelect} onSearch={onSearch} placeholder="input here" /> */}
        <input
          type="text"
          className={styles.input}
          placeholder="Search for products, brands and more"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") dispatch(setTextFilter(value));
          }}
        />
      </div>

      <div className={styles.profiles}>
        <div className={styles.profileItem}>
          <Profile />
          <p>Profile</p>
        </div>
        <Link to="/wishlist" className={styles.profileItem}>
          <Heart />
          <p>Wishlist</p>
        </Link>
        <Link to="/bag" className={styles.profileItem}>
          <Bag />
          <p>Bag</p>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
