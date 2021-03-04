import Detail from "pages/ShirtDetailPage/ShirtDetailPage";
import Shirts from "pages/Shirts/Shirts";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface Props {}
const AppRouter: React.FC<Props> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Shirts} />
        <Route path="/shirts/:id" exact component={Detail} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
