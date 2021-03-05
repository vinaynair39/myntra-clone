import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import AppRouter from "routers/AppRouter";
import "./index.scss";
import { setAllProducts } from "store/bag/reducer";
import { products } from "utils/Products";
import "react-image-lightbox/style.css";

store.dispatch(setAllProducts(products));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
