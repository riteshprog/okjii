import React, { Component } from 'react';
import PrivacyPolicyBody from './PrivacyPolicyBody';
import { Helmet } from 'react-helmet';	

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
<Helmet>
<title>Privacy Policy</title>
</Helmet>
        <PrivacyPolicyBody />
      </div>
    )
  }
}
