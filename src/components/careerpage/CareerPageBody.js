import React, { Component } from 'react';
import CareerSinglepage from '../../img/career/CareerSinglepage.png';
import Locationicon from '../../img/career/Locationicon.png';
import ApplyPage from '../careerpage/ApplyPage';
import Trusted from '../common/Trusted';

export default class CareerPageBody extends Component {
  render() {
    return (
      <div className="career-page">
        <div className="container-fluid career-body-img">
          <div className="row">
          <img src={CareerSinglepage} alt="" className="img-fluid" />
              <div className="career-page-left">
              <h1>Discover your next move at <span className="text-green">Okk</span>JI</h1>
              <p>Have the appetite to discover, learn and build with the team that is changing the way India living?</p>
            </div>
          </div>
        <h1 className="text-center ">GROWING WITH <span className="text-green">OKK</span>JI</h1>
        <div className="row career-technical">
            <div>
              <h2>Technical Program Manager</h2>
              <p><img src={Locationicon} alt="" className="location-icon" />Patna</p>
              <p>As a Technical Program Manager at OkkJi, you could expect to:</p>
              <ul>
                <li>Partner with Business, Product / Tech owners and Operation Leaders in understanding long-term capabilities / initiatives that needs to be managed in-line with the Organisational/Functional goals.</li>
                <li>Based on the asks, create the product backlog and keep it groomed always.</li>
                <li>Own and execute E2E the SDLC for one or more top level key technical initiatives by partnering with </li>
                <li>Project Sponsors, other Technical Program Managers, and multiple development teams. </li>
                <li>Partner with Architects and drive high-quality technical solutions, and provide inputs regarding architecture, design, and priorities. </li>
                <li>Identify, assess and mitigate risks, provide escalation management, anticipate and make trade-oﬀs balancing the business needs versus constraints.</li>
                <li>Clearly articulate &amp; communicate vision, plans and project status to Dunzo Leadership Team and key technical and business stakeholders. </li>
                <li>Besides managing and executing Technical Programs, you will also need to drive the strategy Setting &amp; review exercises like OKR Finalisation, Quarterly/Monthly OKR reviews for the Product/Tech teams</li>
              </ul>
              <p>Must haves:</p>
              <ul>
                <li>Good business &amp; product/tech understanding of few of the following: Mobile App Development,</li>
                <li>User Experience Design, Payments, Analytics, Data Science, Data Services &amp; Platform. </li>
                <li>Strong technical, analytical and quantitative skills with the ability to use data and metrics to back up assumptions, recommendations and drive decisions.</li>
                <li>Demonstrated ability to understand and discuss technical concepts, manage trade oﬀs and evaluate opportunistic new ideas with internal and external partners.</li>
                <li>Hands-on experience in establishing and driving Agile methodology.</li>
                <li>Adept at being detail-oriented with a demonstrated ability to self-motivate and follow-through on programs.</li>
                <li>Ability to think both strategically and tactically and to drive execution. Should be equally comfortable with long term planning and day to day progress tracking and execution</li>
                <li>Proven track record of taking ownership and delivering results in a fast paced environment, including history of successfully delivering large scale projects end to end, through the entire life-cycle.</li>
                <li>Product/Tech Thinking - Understand the overall product/tech strategy, inﬂuence the cross functional team to align on the initiative, showcase an entrepreneurial mindset in solving the underlying product/tech challenge.</li>
                <li>Technology Acumen - Provide valid technical views (as needed) relevant to the technical program and exhibits content leadership.</li>
                <li>Stakeholder Management - Align the stakeholders on &#x2018;What&#x2019;s&#x2019; and the &#x2018;How&#x2019;s&#x2019; of the technical program.</li>
                <li>Planning &amp; Execution - Drive execution rigor using set practises , manage and drive change wherever needed.</li>
              </ul>
            </div>
        </div>

      </div>
      <div className="container career-apply">
        <div className="row">
          <div className="">
            <ApplyPage />

          </div>
        </div>
      </div>
      <Trusted />
      </div>
    )
  }
}
