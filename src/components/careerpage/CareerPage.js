import React, { Component } from 'react';
import CareerPageBody from '../careerpage/CareerPageBody';
import { Helmet } from 'react-helmet';


export default class CareerPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Career </title>
        </Helmet>
        <CareerPageBody />
      </div>
    )
  }
}
