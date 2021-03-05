import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "assets/logo.png";
import { ReactComponent as Bag } from "assets/bag.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Profile } from "assets/profile.svg";
import { ReactComponent as Search } from "assets/search.svg";
import { setTextFilter } from "store/filter/reducer";
import styles from "./Navbar.module.scss";
import { AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";

interface Props {}
const Navbar: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const text = useSelector((state: AppState) => state.filter.text);
  const history = useHistory();
  const [value, setValue] = useState(text);
  const { pathname } = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.links}>
        <Link to="/">MEN</Link>
        <Link to="/">WOMEN</Link>
        <Link to="/">KIDS</Link>
        <Link to="/">HOME & LIVING</Link>
        <Link to="/">OFFERS</Link>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.searchbarIcon}>
          <Search />
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for products, brands and more"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setTextFilter(value));
              if (pathname !== "/") history.push("/");
            }
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
