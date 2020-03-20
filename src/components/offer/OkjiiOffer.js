import React, { Component } from 'react';
import OkjiiOfferBody from '../offer/OkjiiOfferBody';
import { Helmet } from 'react-helmet';

export default class OkjiiOffer extends Component {
  render() {
    return (
      <div>
<Helmet>
<title>Offer</title>
</Helmet>
        <OkjiiOfferBody />
      </div>
    )
  }
}
