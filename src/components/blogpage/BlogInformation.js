import React, { Component } from 'react';
import blog1 from '../../img/blogpage/blog1.png';
import {MDBIcon} from "mdbreact";
export default class BlogInformation extends Component {
  render() {
    return (
      <div className="container-fluid blog-information">
        <h1>Rising from the ashes of a flailing business, Sunil tells his story of grit and resilience</h1>
        <h2>Sunil’s life and business had hit rock bottom in 2014. After a bad investment of a huge sum in a distribution business he saw a glimmer of hope when his friend told him about the Amazon Service Partner program.</h2>
        <div className="row">
          <div className="col-md-6">
            <p>Sunil’s life and business had hit rock bottom in 2014. After a bad investment of a huge sum in a distribution business that sank without a trace, he was unemployed and low on ﬁnancial backing but motivated like never before to turn things around for himself and his aging parents. He saw a glimmer of hope when his friend told him about the Amazon Service Partner program.</p>
            <p>“You’ve got to take the chance when you come face to face with it. You never know when your luck and hard work pay off!” Sunil says with conviction as he relates his story of turnaround. As a Service Partner who joined the Amazon India network in 2015, he was equal parts amazed and relieved that a global brand was willing to take a chance on a regular person without seeking any ﬁnancial reassurance or investment to get things oﬀ the ground. All Sunil needed to bring to the table was motivation, courage, and a strong resolve to make amazing things happen. “And those were just the things I had in supply as I kicked oﬀ V Care Services in partnership with Amazon” he says.</p>
          </div>
          <div className="col-md-6">
            <figure>
              <img src={blog1} alt="blog1" className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
            <p>Heart was set on successWith three employees and just 15 shipments a day to begin with, V Care Services was going to be stationed in Morbi, 350 kilometres away from Sunil’s hometown. Meagre ﬁnancial resources left Sunil with just two options – renting a home or renting an office. He rented the oﬃce and slept there for a few months as he stabilized the early phase of his Service Partner business. “All I needed was an initial foundation to get me started.</p>
            <p>All I had to my name was my resolve to do well in life, but Amazon gave me the ground beneath my feet from which I could shoot for the stars. Even today, from workforce training and re-training to streamlining processes for a rapidly growing business like ours, Amazon has been extremely forthcoming with guidance and support.”</p>
            <p>Sunil remembers his ﬁrst ever shipment delivery like it was yesterday. Situated 12 kilometres away from town and in the middle of a ceramic industrial area, Sunil and his Amazon contact were both covered in white industrial dust as they reached their destination. But the satisfaction of having delivered the ﬁrst ever Amazon package was unmatched. The customer too was pleased about receiving his ﬁrst Amazon delivery and coming into the e-commerce fold despite living in a remote industrial area. What followed was a celebration rife with selﬁes and more between two Indians whose life was slowly and steadily turning around, thanks to Amazon.</p>
            <p>A small-scale empire that continues to grow rapidly From just three employees in 2015, V Care Services has grown to employ over 350 motivated individuals spanning a network of close to 50 delivery stations across Gujarat, Daman &amp; Diu, Madhya Pradesh, and Rajasthan. The company delivers close to 10,000 packages a day through its network for Amazon. With V Care Services, Amazon’s delivery footprint has reached tiny hamlets and towns like Rajpipla, Karjan, Pamoli and Dahej.</p>
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
          <div className="row rating-card">
            <div className="col-12">

              <div className="start"><span className="text-star">How did you like this story?</span><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /><MDBIcon icon="star" /> <span className="text-star-right">121 Rating</span> </div>

            </div>
          </div>
          <div className="row leave-reply-box">

            <div className="col-12">
              <h1>Leave a Reply</h1>

            </div>
          </div>

        
      </div>
    )
  }
}
