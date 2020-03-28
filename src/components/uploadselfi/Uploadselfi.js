import React, { Component } from 'react';
import UplaodSelfyBody from '../uploadselfi/UplaodSelfyBody';
import { Helmet } from 'react-helmet';



export default class Uploadselfi extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <title>Upload Selfy</title>
        </Helmet>
        <UplaodSelfyBody />

      </div>
    )
  }
}
