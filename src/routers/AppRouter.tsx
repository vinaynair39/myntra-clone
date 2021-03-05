import Detail from "pages/ShirtDetailPage/ShirtDetailPage";
import Shirts from "pages/Shirts/Shirts";
import Wishlist from "pages/Wishlist/Wishlist";
import BagPage from "pages/BagPage/BagPage";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface Props {}
const AppRouter: React.FC<Props> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Shirts} />
        <Route path="/shirts/:id" exact component={Detail} />
        <Route path="/wishlist/" exact component={Wishlist} />
        <Route path="/bag/" exact component={BagPage} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
