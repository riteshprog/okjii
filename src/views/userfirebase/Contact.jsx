import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class Contact extends Component {
  render() {
 
    return (
      <>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">Contact Registraction</h1>
  </div>

</div>
<div className="row">
  <div className="col-md-5">
    <ContactForm />
  </div>
  <div className="col-md-7">
    <div>List Of Contacts</div>
  </div>
  </div>
      </>
    )
  }
}
