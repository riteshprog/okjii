import React, { Component } from 'react';
import OkjiiFastBody from '../fast/OkjiiFastBody';
import { Helmet } from 'react-helmet';
export default class OkjiiFast extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Okkji Fast</title>
</Helmet>
        <OkjiiFastBody />
        
      </div>
    )
  }
}
