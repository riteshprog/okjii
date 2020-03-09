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


    <MDBFooter color="green" className=" font-small ">
      <MDBContainer fluid className="footer-margin">
        <MDBRow  className="">
          <MDBCol className="footer-bdr-right"  md="3" sm="6" size="12">
            <h5 className="title">MENU</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="/">ABOUT US</a>
              </li>
              <li>
                <a href="/"> JOIN AS RETAILER</a>
              </li>
              <li>
                <a href="/OkkjiBlog">BLOG</a>
              </li>
              <li>
                <a href="/"> CAREER
</a>
              </li>
              <li>
                <a href="/">OFFERS</a>
              </li>

              <li>
                <a href="#!">REFER &amp; EARN</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  md="3" sm="6" size="12">
            <h5 className="title">HELP</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#!">HELP CENTER
</a>
              </li>
              <li>
                <a href="#!">CONTACT US</a>
              </li>
              <li>
                <a href="#!">TERMS &amp; CONDITION</a>
              </li>
              <li>
                <a href="#!"> PRIVACY POLICY
</a>
              </li>
              <li>
                <a href="#!">REFUND POLICY</a>
              </li>

              <li>
                <a href="#!">DISCLAIMER</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  md="3" sm="6" size="12">
            <h5 className="title">CATEGORIES</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#!">BEVERAGES
</a>
              </li>
              <li>
                <a href="#!">GRAINS, PULSES &amp; FLOUR</a>
              </li>
              <li>
                <a href="#!">FOODS &amp; DRINKS</a>
              </li>
              <li>
                <a href="#!"> DAIRY &amp; EGGS
</a>
              </li>
              <li>
                <a href="#!">SNACKS</a>
              </li>

              <li>
                <a href="#!">PERSONAL CARE</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="bdr-font" md="3" sm="6"  size="12">
            <h5 className="title">FIND US ONLINE</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="#!"><MDBIcon fab icon="facebook" className="mr-2" /> FACEBOOK</a>
              </li>
              <li>
                <a href="#!"><MDBIcon fab icon="twitter-square"  className="mr-2" /> TWITTER</a>
              </li>
              <li>
                <a href="#!"><MDBIcon fab icon="linkedin"  className="mr-2" /> LINKEDIN</a>
              </li>
              <li>
                <a href="#!"><MDBIcon fab icon="instagram"  className="mr-2" /> INSTAGRAM</a>
              </li>
              <li>
                <a href="#!"><MDBIcon fab icon="youtube-square"  className="mr-2" /> YOUTUBE</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright ">
        <MDBContainer fluid className="footer-margin" >
        <p className="cite-text">For best of prices, deals and oﬀers; order online in cities<br /> The delivery service is operational in 13 cities: Ahmedabad, Bengaluru, Chennai, Delhi, Gurugram, Hyderabad, Jaipur, Kanpur, Kolkata, Lucknow, Noida, Mumbai, and Pune. 
        </p>
        <h4 className="mt-1 payment">Payment Options</h4>

        <div className="example-parent">
    <div className="p-2 col-example"><a href="/"><img src={visa} alt="store"  className="visa img-fluid" /> </a></div>
    <div className="p-2 col-example"><a href="/"><img src={Maestro} alt="store" className="Maestro img-fluid" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={paytm} alt="store" className="paytm img-fluid"/></a></div>
    <div className="p-2 col-example"><a href="/"><img src={MasterCard} alt="store" className=" MasterCard img-fluid" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={paypal} alt="store" className="img-icon" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={bhim} alt="store" className="img-icon" /></a></div>
    <div className="p-2 col-example"><a href="/"> Net Banking</a></div>
    <div className="p-2 col-example"><a href="/"> Cash on Delivery </a></div>
    <div className="p-2 col-example"><a href="/"> Udhaar</a></div>
      </div>


          
  </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;