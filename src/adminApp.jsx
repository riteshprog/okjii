import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminLayout from "./layouts/Admin";
import CookieHandler from './utils/cookieHandler';

import './common.css'
import Login from './adminComponents/Login/login.jsx';
import LoginOtp from './views/login/LoaginPage.jsx';
import LoginOtpVerify from './views/login/LoginPageOtp.jsx';

const history = createBrowserHistory();

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    }
    const userData = CookieHandler.readCookie('userData');
    // const userData = CookieHandler.readCookie('userData');
    // if(!userData) window.location = '/login'
  }
  componentDidMount() {
    const userData = CookieHandler.readCookie('userData');
    this.setUserData(userData)
  }
  setUserData = (userData)=> {
    this.setState({userData});
  }

  render() {
    
    if(this.state.userData !== null){
      return (
        <Router history={history}>
          <Switch>
            <Route path="/admin" render={props => <AdminLayout userData={this.state.userData} {...props} />} />
            <Redirect to="/admin/dashboard" />
          </Switch>
        </Router>
      )
    } else {
      return (
        <Router history={history}>
          <Switch>
            {(this.props.type != 'marketing')?
              (
                <Route path="/login" component={() => (<Login setUserData={(data)=>this.setUserData(data)} />)}/>
              )
              :
              (
                <Route path="/login" component={() => (<LoginOtp />)}/>
              )
            }
            <Route path="/verify-otp" component={() => (<LoginOtpVerify setUserData={(data)=>this.setUserData(data)} />)}/>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Redirect path="*" to="/login" />
          </Switch>
        </Router>
      )
    }
  }
}
