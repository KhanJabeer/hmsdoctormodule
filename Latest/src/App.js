import React, { Component } from 'react'
import "antd/dist/antd.css";
import AppRouter from './components/routers/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Forgot from './components/Login/Forgot';
import ResetPassword from "./components/Login/ResetPassword";
import MiniDrawer from './components/Drawer page/Drawerpage';

import './App.css';

export const apiurl = 'http://52.200.251.222:8158/api/v1/';

export default class App extends Component {
  state = { test: false }
  render() {
    return (
      <div>
        <Router basename="doctormodule/?/">
          <Route exact path="/" component={Login} />
          <Route path={"/resetpassword"} component={ResetPassword} exact />
          <Route path="/forgot" component={Forgot} exact />
          <Route path="/Home" component={MiniDrawer} />
        </Router>
      </div>

    )
  }
}
