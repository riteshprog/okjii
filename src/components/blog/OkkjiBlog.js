import React, { Component } from 'react';
import OkkjiBlogBody from '../blog/OkkjiBlogBody';
import { Helmet } from 'react-helmet';
export default class OkkjiBlog extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Blog</title>
</Helmet>
        <OkkjiBlogBody />
      </div>
    )
  }
}
