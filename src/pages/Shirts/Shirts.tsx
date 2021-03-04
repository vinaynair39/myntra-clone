import React, { useState } from "react";
import { Breadcrumb } from "antd";
import FilterBar from "components/FilterBar/FilterBar";
import SortByMenu from "components/SortByMenu/SortByMenu";
import CardList from "containers/CardList/CardList";
import Layout from "containers/Layout/Layout";
import selectProducts from "selectors/products";
import styles from "./Shirts.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "store/store";

interface Props {}
const Shirts: React.FC<Props> = ({}) => {
  const filters = useSelector((state: AppState) => state.filter);
  const sortBy = useSelector((state: AppState) => state.sortBy.sortType);
  const products = selectProducts(
    useSelector((state: AppState) => state.bag.allProducts),
    { sortBy, filters }
  );
  return (
    <Layout>
      <div className={styles.shirts}>
        <div className={styles.row1}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Clothing</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className={styles.breadcrumbItem}>Shirts For Men & Women</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.row2}>
          <span>Shirts For Men & Women</span> - {78512} items
        </div>
        <div className={styles.row3}>
          <h1>Filters</h1>
          <SortByMenu />
        </div>
        <div className={styles.main}>
          <FilterBar />
          <CardList data={products} />
        </div>
      </div>
    </Layout>
  );
};
export default Shirts;
