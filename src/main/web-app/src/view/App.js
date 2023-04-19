import React from "react";
import { Route, Switch } from "react-router-dom";
import CLogPage from "./pages/CLogPage/CLogPage";
import CRegPage from "./pages/CRegPage/CRegPage";
import CCatalogPAge from "./pages/CCatalogPage/CCatalogPage";
import CAddProdPage from "./pages/CAddProdPage/CAddProdPage";
import CDeleteProdPage from "./pages/CDeleteProdPage/CDeleteProdPage";

import SettingPage from "./pages/SettingPage/SettingPage";

import TestPage from "./pages/TestPage";
import Test from "./pages/Test";


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"><CLogPage /></Route>
        <Route path="/register"><CRegPage /></Route>
        <Route path="/catalog"><CCatalogPAge /></Route>
        <Route path="/products/add"><CAddProdPage /></Route>
        <Route path="/products/delete"><CDeleteProdPage /></Route>
        
        <Route path="/setting"><SettingPage /></Route>

        <Route path="/test"><TestPage /></Route>
        <Route path="/page"><Test /></Route>
      </Switch>
    )
  }
}

export default App;