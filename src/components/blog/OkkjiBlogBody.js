import React, { Component } from 'react';
import blog from '../../img/blog/blog.png';
import OkkjiBlogPost from '../blog/OkkjiBlogPost';
import Trusted from '../common/Trusted';


export default class OkkjiBlogBody extends Component {
  render() {
    return (
      <div className="blog-body">
        <div className="container-fluid okjii-blog">
          <div className="row okjii-heading pb-4">
                <img src={blog} alt="" className="img-fluid" />
              <h1 className="okjii-blog-h1">Okkji BLOG</h1>
          </div>
        <p></p>
        <hr className="mt-3" />
        <div className="contaner">
          <OkkjiBlogPost />
          <Trusted />
        </div>

        </div>
      </div>
    )
  }
}
