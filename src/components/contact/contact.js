import React, { Component } from 'react';
import ContactBody from '../contact/ContactBody';
import { Helmet } from 'react-helmet';

export default class contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Contact us</title>
</Helmet>
        <ContactBody />
      </div>
    )
  }
}

