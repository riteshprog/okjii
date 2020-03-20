import React, { Component } from 'react';
import OkjiiRetailerBody from '../retailer/OkjiiRetailerBody';
import { Helmet } from 'react-helmet';

export default class OkjiiRetailer extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Retailer</title>
        </Helmet>
        <OkjiiRetailerBody />
      </div>
    )
  }
}
