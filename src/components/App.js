/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
//import {connect} from 'react-redux';

import HomePage from "./containers/HomePage";
import About from "./containers/About";
import Contact from "./containers/Contact";
import SignIn from "./containers/SignIn";
import NotFoundPage from "./NotFoundPage";
import {AppWrapper} from './styled/base';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
