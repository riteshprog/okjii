import React, { Component } from 'react';
import RegistrationOfferBody from '../registrationoffer/RegistrationOfferBody';
import { Helmet } from 'react-helmet';


export default class RegistrationOffer extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Customers offer</title>
</Helmet>
        <RegistrationOfferBody />
      </div>
    )
  }
}
