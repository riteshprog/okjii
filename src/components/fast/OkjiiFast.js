import React, { Component } from 'react';
import OkjiiFastBody from '../fast/OkjiiFastBody';
import { Helmet } from 'react-helmet';
export default class OkjiiFast extends Component {
  render() {
    return (
      <div>
<Helmet>
<meta name="description" content="Get groceries delivered at your doorstep from local retail shops and kirana stores." />
<title>Fast and free delivery of groceries by local retail shops</title>
</Helmet>
        <OkjiiFastBody />
        
      </div>
    )
  }
}
