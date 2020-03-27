import React, { Component } from 'react';
import ReferEarnBody from '../referearn/ReferEarnBody';
import { Helmet } from 'react-helmet';

export default class ReferEarn extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>REFER &amp; EARN </title>
        </Helmet>
        <ReferEarnBody />
      </div>
    )
  }
}
