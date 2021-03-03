import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Bag } from "assets/bag.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Profile } from "assets/Profile.svg";

import { Link } from "react-router-dom";

interface Props {}
const Navbar: React.FC<Props> = ({}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <Link to="/shop/men">MEN</Link>
        <Link to="/shop/women">WOMEN</Link>
        <Link to="/shop/kids">KIDS</Link>
        <Link to="/shop/home-living">HOME & LIVING</Link>
        <Link to="/shop/offers">OFFERS</Link>
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className={styles.profiles}></div>
    </div>
  );
};
export default Navbar;
