import React, { Component } from 'react';
import CareerBody from '../career/CareerBody';
import { Helmet } from 'react-helmet';


export default class Career extends Component {
  render() {
    return (
      <div>
        <Helmet>
<title>Career</title>
</Helmet>
        <CareerBody />
      </div>
    )
  }
}
