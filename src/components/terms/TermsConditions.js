import React, { Component } from 'react';
import TermsConditionsBody from '../terms/TermsConditionsBody';
import { Helmet } from 'react-helmet';

export default class TermsConditions extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Terms &amp; Conditions</title>
</Helmet>
        <TermsConditionsBody />
      </div>
    )
  }
}
