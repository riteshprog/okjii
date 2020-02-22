import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBFooter } from "mdbreact";
import paytm from '../img/paytm.png';
import bhim from '../img/bhim.png';
import MasterCard from '../img/MasterCard.png';
import Maestro from '../img/Maestro.png';
import paypal from '../img/paypal.png';
import visa from '../img/visa.png';



const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">MENU</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="/">ABOUT US</a>
              </li>
              <li className="list-unstyled">
                <a href="/"> JOIN AS RETAILER</a>
              </li>
              <li className="list-unstyled">
                <a href="/">BLOG</a>
              </li>
              <li className="list-unstyled">
                <a href="/"> CAREER
</a>
              </li>
              <li className="list-unstyled">
                <a href="/">OFFERS</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">REFER &amp; EARN</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">HELP</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!">HELP CENTER
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CONTACT US</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">TERMS &amp; CONDITION</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> PRIVACY POLICY
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">REFUND POLICY</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">DISCLAIMER</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">CATEGORIES</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!">BEVERAGES
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">GRAINS, PULSES &amp; FLOUR</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FOODS &amp; DRINKS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> DAIRY &amp; EGGS
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">SNACKS</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">PERSONAL CARE</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">FIND US ONLINE</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="facebook" /> FACEBOOK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="twitter-square" />TWITTER</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="linkedin" /> LINKEDIN</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="instagram" /> INSTAGRAM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="youtube-square" /> YOUTUBE</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright py-3">
        <MDBContainer>
        <p class="cite-text">For best of prices, deals and oﬀers; order online in cities<br /> The delivery service is operational in 13 cities: Ahmedabad, Bengaluru, Chennai, Delhi, Gurugram, Hyderabad, Jaipur, Kanpur, Kolkata, Lucknow, Noida, Mumbai, and Pune.<br /> 
        </p>
        <p class="mt-0"><b>Payment Options</b></p>
        <ul className="list-unstyled footer-list">
              <li>
                <a href="/"><img src={visa} alt="store"  className="img-icon" /> </a>
              </li>
              <li>
                <a href="/"><img src={Maestro} alt="store" className="img-icon" /></a>
              </li>
              <li>
                <a href="/"><img src={paytm} alt="store" className="img-icon"/></a>
              </li>
              <li>
                <a href="/"><img src={MasterCard} alt="store" className="img-icon" /></a>
              </li>
              <li>
                <a href="/"><img src={paypal} alt="store" className="img-icon" /></a>
                </li>
                <li>
                <a href="/"><img src={bhim} alt="store" className="img-icon" /></a>
                </li>

                <li>
                <a href="/"> Net Banking</a>
                </li>
                <li>
                <a href="/"> Cash on Delivery </a>
                </li>
                <li>
                <a href="/"> Udhaar</a>
                </li>

            </ul>
          
  </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;