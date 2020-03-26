import React, { Component } from 'react';
import Trusted from '../common/Trusted';
import blogpagebackground from '../../img/blogpage/blogpagebackground.png';
import OkkjiBlogPost from '../blog/OkkjiBlogPost';
import BlogInformation from '../blogpage/BlogInformation';

export default class BlogPageBody extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid blog-page">
        <div className="row okjii-heading pb-4">
                <img src={blogpagebackground} alt="" className="img-fluid" />
              <h1 className="okjii-blog-h1">Food &amp; LifeStyle</h1>
          </div>
          <BlogInformation />
        <OkkjiBlogPost />
        </div>
          <Trusted />
      </div>
    )
  }
}
