import React, { Component } from 'react';
import blog6 from '../../img/blogpage/blog6.jpg';
import {MDBIcon, MDBBtn} from "mdbreact";
export default class BlogInformation extends Component {
  render() {
    return (
      <div className="container-fluid blog-information">
        <h1>Why Kirana stores are Evergreen in Indian Society?</h1>
        <div className="row">
          <div className="col-md-6">
            <p>For about insofar as individuals have existed, they have been sharing, trading, selling, and expanding assets.  Society Kirana stores are Evergreen from the very beginning of society. If we follow the total history of trade back to its beginning, we should make a trip to when wooly mammoths despite everything strolled the Earth. Individuals traded bovines and sheep in exchange as far back as 9000 BC, they move to coins and eventually paper currency.</p>
            <p>The junction of these practices and trade is always a Kirana store. The history of ‘Kirana” and neighborhood shopping grow with the development of Indian society. Even today almost 97% of the total grocery shopping takes place at local Kirana stores. People of India rely, believe and dependent on neighborhood Kirana shops for a long time. The emergence of e-commerce in the past few years along with giant supermarkets does not affect very much to the Local king. They are still not only relevant but essential for the entire society’s food and need. Now, a very generous question arises why Kirana stores are evergreen?</p>
          </div>
          <div className="col-md-6">
            <figure>
              <img src={blog6} alt="blog6" className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
              <p>There are many reasons and facts behind them. Here are a few very common and important are:</p>
              <ol>
                <li><p>Deep-Deep rooted:</p>
                <p>Kiranas are everywhere; they are in every street, road, colonies, society, village, town, city and metros. The presence of the Kirana store makes them easily accessible to everyone. Every individual has access to Mom-Dad shops make it evergreen in every phase of History.  We if talk about India itself has more than 12 million Kirana stores across the country.</p></li>
                <li><p>Reliable and Supportive: </p>
                <p>Kirana stores are an integral part of Indian society. Shops are generally operated by individuals from society. Common people know each other; a shopkeeper is like a friend, family or relative.  Neighborhood shops stand in every situation; they are beyond any terms and conditions and perform based on personal relationships. People trust them as they think that shops are their own.</p></li>
                <li><p>Evergreen Udhaar:</p>
                <p>Ancient Udhaar system is the USP of any Neighbourhood Kirana store. This facility is not given by any kind of E-commerce players or Mega Store. This facility embedded Kirana store very deep in the heart of the common people as they think that these stores are the companion and helping hand in any trouble, calamity or financial crisis. It is like a boon for salaried people that make it ever popular shopping hub for home grocery.</p></li>
                <li><p>Specialist of local test and purchase:</p>
                <p>Kirana shops operate in the hyper-local level.  They are very known to locals and locals also consider then part of their family. They know the test of not only that very geographical area but also the test and food habit of an individual family also. This establishes them as a favorite destination for shopping for locals.</p></li>
                <li><p> Symbol of individual identity and endeavor:</p>
                <p>Local Kirana shops are the micro-level appearance of an individual’s hard work, dedication, and endeavor. The culture of Indian society always salutes and bows down to the sweat of labor. The whole society support to flourish as it thinks that it is the upliftment and empowerment of society.  Any E-commerce giant or big capitalist can amalgamate with society like Kirana shops because Kirana shop is the characterization of ambition, zeal and hard labor of the society’s unit that is supported by every identity of society.</p></li>
              </ol>
              <p>Eventually, we can say that Kirana stores are like a family member of the family and an integral part of Society. It was always with us and will remain so because it is the living scripture of human development.</p>
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
