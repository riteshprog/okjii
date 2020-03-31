import React, { Component } from 'react';
import blog3 from '../../img/blogpage/blog3.jpg';
import {MDBIcon, MDBBtn} from "mdbreact";
export default class BlogInformation extends Component {
  render() {
    return (
      <div className="container-fluid blog-information">
        <h1>Why neighborhood Kirana Survive in the wave of E-commerce?</h1>
        <div className="row">
          <div className="col-md-6">
            <p>When the e-commerce sector is growing at a rapid rate, Kirana shops are firm static in their places. When giant corporate houses entering in eCommerce business and ready to temper the traditional Kirana shopping, Small Kirana shops are not only challenging them but also at the upper age in this competition. So, a very genuine question arises that why neighborhood Kirana survives in the wave of E-commerce and how?</p>
            <p>The sustainability of the Kirana store resides in the nature of its operation and existence. The deep-rooted presence, micro-level operation, age-old bounding and rich experience of the local test are the main reasons that put Kirana store on the front foot.</p>
          </div>
          <div className="col-md-6">
            <figure>
              <img src={blog3} alt="blog3" className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
              <h2>Deep-rooted presence:</h2>
            <p>The penetration of the Neighbourhood Kirana store is quite high and dense with respect to giant eCommerce Players. Ecommerce sites and apps are targeting megacities and metros but the presences of Kirana stores are everywhere, from the remotest of the remote area of the country to metros and tier 1 cities. This widespread presence places Kirana stores in front that automatically get the natural attraction of the common buyer. This deep presence makes Kirana sustain in the storm of E-commerce.</p>
            <h2>Micro-level Operation:</h2>
            <p>Kirana shops are micro-unit of shopping that target a certain area of each demographic location. The presence of many shops in a certain area magnifies this even more. The operation is so directed and perfect that no parachuted competitor can intrude in the territory of a mom-dad Kirana store. They tune very easily with the geographical need of a specific location that is tough for big players that can target some universally needs and demands only.</p>
            <h2>Age-old Bounding:</h2>
            <p>Kirana store in India is not only a business but it the ambition, expectations, and strength of the individual as well as the society that develops with the development of human civilization. The relation between a Kirana shop and a customer is not a buyer-seller relationship. It is far beyond that as it is so deeply embedded in the heart of common people that they think their purchasing ultimately benefits themselves or their friends or family. This kind of relationship development takes centuries to build. Any compete capitalist eCommerce never attached or related themselves with common people in such a manner that Kirana shops already have.</p>
            <h2>Rich Experience of local test:</h2>
            <p>India is a foodie country. Food is not just a need or requirement; it is a culture that changes with the demography of the country. The diversity of India makes it rather critical. The taste and need of different areas are different. The food habit, taste, and savour are changing very frequently with the demography, language, climate, and culture which generally changes every 3 kilometers in India. Local Kirana has specialization to know the local test that an eCommerce company cannot do. Big retail houses operate on some universal acceptable things only.</p>
            <p>Hence, Kirana stores are presently on the upper edge due to their traditional face and nature. These roots hold neighborhood Kirana in the wave of E-commerce.</p>
            </div>
          </div>
          <div className="row social-cards">
            <div className="col-12 social-network">
              <div className="social-card love"><MDBIcon far icon="heart" /> <span className="text-social">Love</span></div>
              <div className="social-card facebook"><MDBIcon fab icon="facebook-f" /> <span className="text-social">Share</span></div>
              <div className="social-card twitter"><MDBIcon fab icon="twitter" /> <span className="text-social">Tweet</span></div>
              <div className="social-card whatsapp"><MDBIcon fab icon="whatsapp" /> <span className="text-social">Status</span></div>
              <div className="social-card story"><MDBIcon fab icon="instagram" /> <span className="text-social">Story</span></div>

            </div>
          </div>
          <div className="row text-center desktop">
            <div className="col-md-12 rating-card">

              <div className="star"><span className="text-star">How did you like this story?</span><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /> <span className="text-star-right">121 Rating</span> </div>

            </div>
          </div>

          <div className="row text-center mobile">
            <div className="col-md-12 rating-card">

              <div className="star"><span className="text-star">How did you like this story?<br /></span><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><br /> <span className="text-star-right">121 Rating</span> </div>

            </div>
          </div>


          <div className="row leave-reply-box">

            <div className="col-12">
              <div className="leave-reply-outer">
              <h1>Leave a Reply</h1>
            <div className="leave-reply">
              <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            />

            </div>
            <div className="form-group leave-field">
            <input
        type="text"
        name="name"
        className="form-control mr-4"
        id="formGroupExampleInput"
        placeholder="Your Name*"
      />
      <input
        type="email"
        name="email"
        className="form-control mr-4"
        id="formGroupExampleInput"
        placeholder="Your Mail*"
      />
      <input
        type="text"
        name="website"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Website"
      />
            </div>
            <div className="text-center leave-button">
          <MDBBtn>Submit</MDBBtn>
        </div>
            </div>
            </div>


          </div>
<div className="row text-center related-blog">
  <div className="col-md-12"><h1>Related Blogs</h1></div>
</div>
<div className="bdr-bottom"></div>
        
      </div>
    )
  }
}
