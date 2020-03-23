import React, { Component } from 'react';
import PreRegistration from '../../img/registration/PreRegistration.png';


export default class RegistrationOfferPage extends Component {
  render() {
    return (
      <div>
        <div className="container reg-offerpage">
          <div className="row">
            <div className="col-md-6">
            <div class="sound-signal">
            <h1>Get 40% off on OKKJI Fast for three consecutive orders</h1>
  <p><input type="radio" name="soundsignal" id="soundsignal1" checked="checked" />
  <label for="soundsignal1">Install APP OKKJI</label></p>
  <p><input type="radio" name="soundsignal" id="soundsignal2" className="float-right" />
  <label for="soundsignal2">Create account with registered mobile no</label></p>
  <p><input type="radio" name="soundsignal" id="soundsignal3" checked="checked" />
  <label for="soundsignal3">Unlock OKKJI fast services instantly</label></p>
  <p><input type="radio" name="soundsignal" id="soundsignal4" className="float-right" />
  <label for="soundsignal4">Enjoy 40% off on OKKJI Fast Services</label></p>
</div>
            </div>
            <div className="col-md-6">
              <figure>
                <img src={PreRegistration} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
