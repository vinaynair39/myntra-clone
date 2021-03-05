import React, { useEffect, useState } from "react";
import { Breadcrumb, Drawer } from "antd";
import FilterBar from "components/FilterBar/FilterBar";
import SortByMenu from "components/SortByMenu/SortByMenu";
import CardList from "containers/CardList/CardList";
import Layout from "containers/Layout/Layout";
import selectProducts from "selectors/products";
import styles from "./Shirts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";
import { setShowSimilar } from "store/common/reducer";
import { Link } from "react-router-dom";

interface Props {}
const Shirts: React.FC<Props> = ({}) => {
  const filters = useSelector((state: AppState) => state.filter);
  const common = useSelector((state: AppState) => state.common);
  const sortBy = useSelector((state: AppState) => state.sortBy.sortType);
  const dispatch = useDispatch();

  const products = selectProducts(
    useSelector((state: AppState) => state.bag.allProducts),
    { sortBy, filters }
  );

  return (
    <Layout>
      <div className={styles.shirts}>
        <div className={styles.rows}>
          <div className={styles.row1}>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>{" "}
              <Breadcrumb.Item>
                <Link to="/">Clothing</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span className={styles.breadcrumbItem}>Shirts For Men & Women</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.row2}>
            <span>Shirts For Men & Women</span> - {products.length} items
          </div>
          <div className={styles.row3}>
            <h1>Filters</h1>
            <SortByMenu />
          </div>
        </div>
        <div className={styles.main}>
          <FilterBar />
          <CardList data={products} forWishlist={false} />
        </div>
      </div>
      <Drawer
        title="Similar Products"
        placement="right"
        closable={true}
        onClose={() => dispatch(setShowSimilar({ query: common.queryForSimilar, id: common.similarFor }))}
        visible={common.showSimilar}
        width={324}
        closeIcon={true}
      >
        <CardList
          forWishlist={false}
          data={selectProducts(products, { filters: { ...filters, text: common.queryForSimilar }, sortBy }).filter((item) => item.id !== common.similarFor)}
        />
      </Drawer>
    </Layout>
  );
};
export default Shirts;
