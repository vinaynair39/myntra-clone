import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { ReactComponent as Bag } from "assets/bag.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Profile } from "assets/profile.svg";
import { ReactComponent as Search } from "assets/search.svg";

import styles from "./Navbar.module.scss";

interface Props {}
const Navbar: React.FC<Props> = ({}) => {
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
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className={styles.profiles}>
        <div className={styles.profileItem}>
          <Profile />
          <p>Profile</p>
        </div>
        <div className={styles.profileItem}>
          <Heart />
          <p>Wishlist</p>
        </div>
        <div className={styles.profileItem}>
          <Bag />
          <p>Bag</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
