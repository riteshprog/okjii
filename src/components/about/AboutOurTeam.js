import React, { Component } from "react";
import Mannu from "../../img/about/Mannu.png";
import Vicky from "../../img/about/Vicky.png";
import Depti from "../../img/about/Depti.png";
import Akash from "../../img/about/Akash.png";
import Ravi from "../../img/about/Ravi.png";
import Ritesh from "../../img/about/Ritesh.png";
import Sweety from "../../img/about/Sweety.png";
import Aastha from "../../img/about/Aastha.png";
import Simpy from "../../img/about/Simpy.png";
import Ankur from "../../img/about/Ankur.png";
import Sachin from "../../img/about/Sachin.png";

export default class AboutOurTeam extends Component {
  render() {
    return (
      <div className="container-fluid our-team">
        <div className="container df fdc">
          <div className="row ">
            <div className="col-md-12">
              <h1 class="text-center">Our Team</h1>
              <figure className="text-center">
                <img
                  src={Mannu}
                  alt=""
                  className="img-fluid rounded-circle Mannu"
                />
                <figcaption>
                  <h2>
                    Mannu Jha <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>CEO, Founder &amp; Operations Director</p>
                  <p></p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Vicky}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Vicky Aggarwal <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Technical Head</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Depti}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Deepti Anand <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Chief Talent Oﬃcer</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Akash}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Akash Khatr <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Technical Support Head</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Ravi}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Ravi Kumar <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Content, Research, and Training</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row  pt-4">
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Ritesh}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Ritesh Kumar <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>React Developer</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Sweety}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Sweety <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Catalog Administrator</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Aastha}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Aastha Thakur <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Inventory Head</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Simpy}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Simpy Kashyap <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Catalog Organizer</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row text-center our-teams  pt-4 ">
            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Ankur}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Ankur Sinha <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Support Head</p>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-3 col-sm-6">
              <figure className="text-center">
                <img
                  src={Sachin}
                  alt=""
                  className="img-fluid rounded-circle Vicky"
                />
                <figcaption>
                  <h2>
                    Sachin Kumar Singh <i class="fab fa-linkedin"></i>
                  </h2>
                  <p>Office Admin</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
