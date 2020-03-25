import React, { Component } from 'react';
import AboutBody from '../about/AboutBody'
import { Helmet } from 'react-helmet';
export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <title>OKKJI empowers local retail shops by digitalising their business</title>
        <meta name="description" content="Connecting customers with local retail shops" />
        </Helmet>
        <AboutBody />
      </div>
    )
  }
}
