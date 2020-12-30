import React from 'react';
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./redux/index";
import Login from './Login';
import Signup from './Signup';
import Game from './Game';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
