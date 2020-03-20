import React, { Component } from 'react'
import RefundPolicyBody from '../refund/RefundPolicyBody';
import { Helmet } from 'react-helmet';	

export default class RefundPolicy extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Refund</title>
</Helmet>
        <RefundPolicyBody />
      </div>
    )
  }
}
