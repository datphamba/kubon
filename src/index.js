import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Menu from './components/menu/menu.js'

import Home from './components/home/home.js';

import Users from './components/users/users.js';
import userDetails from './components/users/user_details.js';
import Contact from './components/contact/contact.js';

import Notfound from './components/pages/notfound.js';

const routing = (
  <Router>
    <Menu />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={userDetails} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
