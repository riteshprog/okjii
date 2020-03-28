import React, { Component } from 'react'
import logo192 from "../../img/home/logo192.png";

export default class UplaodSelfyBody extends Component {
  render() {
    return (
      <div className="blog-page">
        <div className="container selfi-blog">
          <div className="blog">
          <div className="left"><p>We Care 24 Hour for You</p>
          <img src={logo192} alt="" className="img-fluid selfi-blogicon" />
</div>
          <div className="right"><p>We Protect 24 Hour For You</p>
          <img src={logo192} alt="" className="img-fluid selfi-blogicon" />
</div>
          </div>
          <div className="blog">
          <div className="left"><p>We Surve 24 Hour For You</p>
          <img src={logo192} alt="" className="img-fluid selfi-blogicon" />
</div>
          <div className="right"><p>I Stay At Home 24 Hour For all of You</p>
          <p><button  type="file">Click Your Image And<br />Share On Social Media</button></p></div>
          </div>
        </div>

        <img src={logo192} alt="" className="img-fluid selfi-icon" />
      </div>
    )
  }
}
