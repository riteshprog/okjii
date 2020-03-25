import React, { Component } from 'react';
import RegistrationBody from '../registration/RegistrationBody';
import { Helmet } from 'react-helmet';


export default class Registration extends Component {
  render() {
    return (
      <div>
        
<Helmet>
<title>Customer registration</title>
</Helmet>
        <RegistrationBody />
      </div>
    )
  }
}
