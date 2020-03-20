import React, { Component } from 'react';
import blog from '../../img/blog/blog.png';
import smallimg from '../../img/blog/smallimg.png';
import smallimg2 from '../../img/blog/smallimg2.jpg';
import { MDBIcon } from "mdbreact";

export default class OkkjiBlogBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid okjii-blog">
          <div className="row okjii-heading pb-4">
                <img src={blog} alt="" className="img-fluid" />
              <h1 className="okjii-blog-h1">Okkji BLOG</h1>
          </div>
        <p></p>
        <hr className="mt-3" />
        <div className="contaner">
        <div className="row">
          <div className="col-md-6 blog-column">
            <figure classname="blog-figure">
              <img src={smallimg} alt=""  className="img-fluid" />
              <figcaption>
              <h3>Aakash Kumar | 25 Nov 2019 | Food &amp; LifeStyle</h3>
              </figcaption>
            </figure>
            <h2>#BeatTheHeat with Grofers.</h2>
            <p className="" id="collapseContent">During this time of the year, parents are always busy geting creative to make the kids have a gala time with – refreshing drinks, fun and light snacks and quirky games.</p>
  <a className="btn blue-text">Read More</a>
  <MDBIcon icon="share-alt" className="float-right" /><span className="float-right">07</span>
  <MDBIcon far icon="heart" className="float-right" /><span className="float-right">07</span>

          </div>
          <div className="col-md-6 blog-column">
          <figure classname="blog-figure">
              <img src={smallimg2} alt=""  className="img-fluid" />
              <figcaption>
              <h3>Aakash Kumar | 25 Nov 2019 | Food &amp; LifeStyle</h3>
              </figcaption>
            </figure>
            <h2>#BeatTheHeat with Grofers.</h2>
            <p className="" id="collapseContent">During this time of the year, parents are always busy geting creative to make the kids have a gala time with – refreshing drinks, fun and light snacks and quirky games.</p>
  <a className="btn blue-text">Read More</a>
  <MDBIcon icon="share-alt" className="float-right" /><span className="float-right">07</span>
  <MDBIcon far icon="heart" className="float-right" /><span className="float-right">07</span>

          </div>
        </div>
        </div>

        </div>
      </div>
    )
  }
}
