import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';


export default class BlogNavBar extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="blog-navbar">
            <Col md="10"><p>Blogs</p></Col>
            <Col md="2" className="text-center"><p><Link to="blog/add-blog/:blogId" type="button" className="btn">+ADD BLOG</Link> </p></Col>
          </Row>
        </div>
      </>
    )
  }
}
