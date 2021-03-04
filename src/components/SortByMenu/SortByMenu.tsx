import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import styles from "./SortByMenu.module.scss";
import { useDispatch } from "react-redux";
import { setSortType } from "store/sortBy/reducer";

interface Props {}
const SortByMenu: React.FC<Props> = ({}) => {
  const [current, setCurrent] = useState({
    key: "new",
    value: "What's New",
  });
  const dispatch = useDispatch();

  const onCurrentSortChange = (e: any) => {
    setCurrent({
      key: e.target.value,
      value: e.target.textContent,
    });

    dispatch(setSortType(e.target.value));
  };
  return (
    <div className={styles.sortByMenu}>
      Sort By: <span className={styles.label}>{current.value}</span>
      <span className={styles.icon}>
        <DownOutlined />
      </span>
      <ul>
        <button value="NEW" onClick={onCurrentSortChange}>
          What's New
        </button>
        <button value="POPULAR" onClick={onCurrentSortChange}>
          Popularity
        </button>
        <button value="BETTER_DISCOUNT" onClick={onCurrentSortChange}>
          Better Discount
        </button>
        <button value="PRICE_HIGH_TO_LOW" onClick={onCurrentSortChange}>
          Price High To Low
        </button>
        <button value="PRICE_LOW_TO_HIGH" onClick={onCurrentSortChange}>
          Price Low To High
        </button>
      </ul>
    </div>
  );
};
export default SortByMenu;
