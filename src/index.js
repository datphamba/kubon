import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./components/init/App.js";

import Users from "./components/users/users.js";
import userDetails from "./components/users/user_details.js";
import Contact from "./components/contact/contact.js";

import Notfound from "./components/pages/notfound.js";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={userDetails} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
