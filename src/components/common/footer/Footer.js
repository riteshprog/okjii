import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBFooter } from "mdbreact";
import paytm from '../../../img/paytm.png';
import bhim from '../../../img/bhim.png';
import MasterCard from '../../../img/MasterCard.png';
import Maestro from '../../../img/Maestro.png';
import paypal from '../../../img/paypal.png';
import visa from '../../../img/visa.png';



const FooterPage = () => {
  return (


    <MDBFooter color="green" className=" font-small ">
      <MDBContainer fluid className="footer-margin">
        <MDBRow  className="">
          <MDBCol className="footer-bdr-right"  md="3" sm="6" xs="6" size="12">
            <h5 className="title">MENU</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="/about">ABOUT US</a>
              </li>
              <li>
                <a href="/okkji-retailer"> JOIN AS RETAILER</a>
              </li>
              <li>
                <a href="/blog">BLOG</a>
              </li>
              <li>
                <a href="/"> CAREER
</a>
              </li>
              <li>
                <a href="/offer">OFFERS</a>
              </li>

              <li>
                <a href="/">REFER &amp; EARN</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  md="3"  sm="6" xs="6" size="12">
            <h5 className="title">HELP</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="/help">HELP CENTER
</a>
              </li>
              <li>
                <a href="/contact">CONTACT US</a>
              </li>
              <li>
                <a href="/tnc">TERMS &amp; CONDITION</a>
              </li>
              <li>
                <a href="/privacy"> PRIVACY POLICY
</a>
              </li>
              <li>
                <a href="/refund">REFUND POLICY</a>
              </li>

              <li>
                <a href="/disclaimer">DISCLAIMER</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  md="3"  sm="6" xs="6" size="12">
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
          <MDBCol className="bdr-font" md="3"  sm="6" xs="6" size="12">
            <h5 className="title">FIND US ONLINE</h5>
            <ul className="list-unstyled footer-list">
              <li>
                <a href="https://www.facebook.com/okkjiofficial/" target="_blank"><MDBIcon fab icon="facebook" className="mr-2" /> FACEBOOK</a>
              </li>
              <li>
                <a href="https://twitter.com/okkjiindia" target="_blank"><MDBIcon fab icon="twitter-square"  className="mr-2" /> TWITTER</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/okkji/" target="_blank"><MDBIcon fab icon="linkedin"  className="mr-2" /> LINKEDIN</a>
              </li>
              <li>
                <a href="https://www.instagram.com/okkji_india" target="_blank"><MDBIcon fab icon="instagram"  className="mr-2" /> INSTAGRAM</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC_puJ4PxuGPD8BUvKGKd16A" target="_blank"><MDBIcon fab icon="youtube-square"  className="mr-2" /> YOUTUBE</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright ">
        <MDBContainer fluid className="footer-margin" >
        <p className="cite-text">We are rooting our-self in Patna and Jaipur initially. The sprite of premium service,customer's convenience and super fast delivery will touch the most prominent emerging cities like Ahmadabad, Lucknow, Hyderabad, Chandigarh, Kolkata, Ranchi, Raipur, Varanasi and Delhi-NCR in very near future.
        </p>
        <h4 className="mt-1 payment">Payment Options</h4>

        <div className="example-parent">
    <div className="p-2 col-example"><img src={visa} alt="store"  className="visa img-fluid" /></div>
    <div className="p-2 col-example"><img src={Maestro} alt="store" className="Maestro img-fluid" /></div>
    <div className="p-2 col-example"><img src={paytm} alt="store" className="paytm img-fluid"/></div>
    <div className="p-2 col-example"><img src={MasterCard} alt="store" className=" MasterCard img-fluid" /></div>
    <div className="p-2 col-example"><img src={paypal} alt="store" className="img-icon" /></div>
    <div className="p-2 col-example"><img src={bhim} alt="store" className="img-icon" /></div>
    <div className="p-2 col-example"> Net Banking</div>
    <div className="p-2 col-example"> Cash on Delivery </div>
    <div className="p-2 col-example"> Udhaar</div>
      </div>


          
  </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;