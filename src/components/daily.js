import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Asset1 from '../img/home/Asset1.png';
import {} from "mdbreact";

const daily = () => {
return (
  <section className="okjii-daily">
<MDBContainer>
  <MDBRow>
    <MDBCol size="6">
    <figure className="daily-figure-img">
              <img src={Asset1} alt=""/>
    </figure>

    </MDBCol>
    <MDBCol size="6">
    <h1><b>Daily</b> useable from nearby shops</h1>
              <p>Because we digitalized all hyper-local shop who knows the taste and need of Indian families. We are extending the convenience of customer, their faith according to the digital age and social trend.</p>
              <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Many payment options</p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Street’s store on smartphone</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digital representation of all product</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digitalization of evergreen “UDHAAR”</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digitalization of faith, reliability &amp; local taste</p></li>
              </ul>
    
    </MDBCol>
  </MDBRow>


</MDBContainer>
</section>
);
}

export default daily;






