import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";

interface Props {}
const AppRouter: React.FC<Props> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
