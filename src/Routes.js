//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  MessagePage,
  JoinPage,
  ShopPage,
} from "./components/pages";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route 
        exact
        path="/"
        render={() => <HomePage />}
        />
        <Route 
        exact
        path='/about'
        render={(props) => <MessagePage {...props}/>}
        />
        <Route 
        exact
        path='/privacy'
        render={(props) => <MessagePage {...props}/>}
        />
        <Route 
        exact
        path='/join'
        render={(props) => <JoinPage {...props}/>}
        />
        <Route 
        exact
        path='/s/:username'
        render={(props) => <ShopPage {...props}/>}
        />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
