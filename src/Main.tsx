import React from "react";
import PageRoute from "../src/utils/with-layout";
import { Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";

const Main = () => (
  <Switch>
    <PageRoute
      path="/"
      component={HomePage}
      pageData={{ title: "homepage" }}
    ></PageRoute>
  </Switch>
);

export default Main;
