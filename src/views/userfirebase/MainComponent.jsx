import React, { Component } from 'react';
import Contact from './Contact';

export default class MainComponent extends Component {
  render() {
 
    return (
      <>
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-1">
              <Contact />
            </div>
          </div>
        </div>
      </>
    )
  }
}
