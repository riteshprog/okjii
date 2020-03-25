import React, { Component } from 'react'

export default class AccountHelpOur extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row okjii-account">
          <div className="col-md-4">
            <h3 className="mb-3 ">Your Account</h3>
            <ul className="ml-4">
              <li><span className="text-blue">Can't access your account?</span></li>
              <li><span className="text-blue">Recent order with OkkJi?</span></li>
              <li><span className="text-blue">Useful stuﬀ you can do with OkkJi?</span></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3">Social Help</h3>
            <ul className="list-unstyled">
              <li><span className="text-blue">Sign in with social account?</span></li>
              <li>Use your personal account or create one just for Help on Social</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3 ">Our Comminites</h3>
            <ul className="list-unstyled">
              <li>Learn more about <span className="text-blue">OkkJi</span>, So you can join our online communities</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
