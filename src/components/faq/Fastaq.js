import React, { Component } from 'react';
import Fastaqbody from '../faq/Fastaqbody';
import { Helmet } from 'react-helmet';
export default class Fastaq extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Help</title>
</Helmet>
        <Fastaqbody />
      </div>
    )
  }
}
