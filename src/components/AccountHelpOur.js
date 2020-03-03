import React, { Component } from 'react'

export default class AccountHelpOur extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div className="col-md-4">
            <h3 className="mb-3  font-weight-bold">Your Account</h3>
            <ul className="list-bullet">
              <li><p>Can't access your account?</p></li>
              <li><p>Recent order with OkkJi?</p></li>
              <li><p>Useful stuﬀ you can do with OkkJi?</p></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3 font-weight-bold">Social Help</h3>
            <ul className="list-unstyled">
              <li><p>Sign in with social account?</p></li>
              <li><p>Use your personal account or create one just for Help on Social</p></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3  font-weight-bold">Our Comminites</h3>
            <ul className="list-unstyled">
              <li><p>Learn more about OkkJi, So you can join our online communities</p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
