import React, { Component } from 'react';
import okjiilogo from "../../img/selfy/okjiilogo.png";
import Doctor from "../../img/selfy/Doctor.png";
import Police from "../../img/selfy/Police.png";
import DeliveryPerson from "../../img/selfy/DeliveryPerson.png";

export default class UplaodSelfyBody extends Component {
  render() {
    return (
      <div className="blog-page">
        <div className="container selfi-blog">

          <div className="row blog">
            <div className="col-md-6">
          <div className="left1"><p>We Care 24 Hour for You</p>
          <img src={Doctor} alt="" className="img-fluid selfi-blogicon" />
</div>
</div>
<div className="col-md-6">
          <div className="right1"><p>We Protect 24 Hour For You</p>
          <img src={Police} alt="" className="img-fluid selfi-blogicon" />
</div>
</div>
          <div className="col-md-6">
          <div className="left1"><p>We Surve 24 Hour For You</p>
          <img src={DeliveryPerson} alt="" className="img-fluid selfi-blogicon" />
</div>
</div>
<div className="col-md-6">
          <div className="right1"><p>I Stay At Home 24 Hour For all of You</p>
          <p><button  type="file">Click Your Image And<br />Share On Social Media</button></p></div>
          </div>
          </div>
          <img src={okjiilogo} alt="" className="img-fluid selfi-icon" />
        </div>

      </div>
    )
  }
}
