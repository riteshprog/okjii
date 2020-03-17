import React, { Component } from 'react'
import apple from '../../img/home/apple.png';
import ourpractice from '../../img/about/ourpractice.png';
import google from '../../img/home/google.png';
import GetAppLink from '../about/GetAppLink';

export default class OurPractice extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid okkji-ourpractice">
          <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <figure className="">
                <img src={ourpractice} alt="" className="img-fluid ourpractice" />
              </figure>
            </div>
          <div className="col-md-6 col-sm-12">
            <h1>Our practices &amp; philosophy</h1>
            <p><b>OkkJi believes</b> to rejuvenate static, stable &amp; sustainable relationships of past and balancing it with new demand, era, &amp; expectations. We believe to nurture our living heritage by making them relevant in changing norms and parameters of society. Our working philosophy and team endeavor are entirely dedicated to smoothen the age-old relationship through ﬁne-tuning and digital epitome. Our practices and work culture are irrigating by transparency, coherence and mutual cooperation.</p>
            <h2>Be the king of your responsibilities</h2>
            <p><b>We believe</b> to believe the potential and capacity of every individual that empowers our endeavor. Our work culture provides full autonomy to everyone. We promote every individual to drive from the front to stimulate the hidden leader. So that, they positively impact the performance of the team as well as our sole motive.</p>
            <h2>Practice for perfection</h2>
            <p><b>In the age</b> of Data and digitalization, we rely on the scientiﬁc approach to improve the existing workﬂow and performance. We churn data regularly to analyze the trends, demand, and loopholes. It provokes our team for the innovation and delimiting themselves out of the box. Hence, we are constantly cocktailing new ideas and innovation with our core philosophy.</p>
            <h2>Team ﬁrst is soul slogan</h2>
            <p><b>An individual’s</b> autonomy and freedom to execute are complementing tools for the team’s supremacy and performance. We believe in “Team First” that is backed by the union of  individual’s sovereignty. In this way team is cardinal but its cardinality is established by an individual’s eﬀort and sweat.</p>
            <h2>Mutual Responsibility</h2>
            <p>In our team, no one is “Boss”. We all are executives under a common cause. This kind of environment injects universal responsibility in the team. We enjoy the “success” of every individual eﬀort as team’s achievement and stand ﬁrm collectively to encounter any problem.</p>
          </div>
          </div>
        
          <div className="row text-center  desktop">
            <div className="col-md-6 col-sm-6">
              <figure>
                <img src={apple} alt="" className="img-fluid float-right  img-apple" />
              </figure>
            </div>
            
            <div className="col-md-6  col-sm-6">
              <figure>
                <img src={google} alt="" className="img-fluid float-left img-apple" />
              </figure>
            </div>
          </div>
          <div className="row text-center offset-sm-3 mobile">
            <div className="col-md-6 col-sm-6">
              <figure>
                <img src={apple} alt="" className="img-fluid  img-apple" />
              </figure>
            </div>
            
            <div className="col-md-6  col-sm-6 google-top">
              <figure>
              <img src={google} alt="" className="img-fluid img-apple" />
              </figure>
            </div>
          </div>

          <div className="row offset-lg-4 offset-sm-2 offset-md-4">
          <GetAppLink />
          </div>
          </div>
        </div>
      </div>
    )
  }
}
