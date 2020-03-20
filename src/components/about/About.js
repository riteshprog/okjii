import React, { Component } from 'react';
import AboutBody from '../about/AboutBody'
import { Helmet } from 'react-helmet';
export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <meta name="description" content="Connecting customers with local retail shops" />
          <title>Connecting customers with local retail shops</title>
        </Helmet>
        <AboutBody />
      </div>
    )
  }
}
