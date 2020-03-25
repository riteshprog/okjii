import React, { Component } from 'react';
import DisclaimerBody from '../disclaimer/DisclaimerBody';
import { Helmet } from 'react-helmet';	

export default class Disclaimer extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Disclaimer</title>
</Helmet>
        <DisclaimerBody />
      </div>
    )
  }
}
