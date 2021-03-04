import Navbar from "components/Navbar/Navbar";
import React from "react";
import styles from "./Layout.module.scss";

interface Props {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
