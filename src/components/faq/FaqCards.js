import React from 'react';
import { MDBCard, MDBCardText } from "mdbreact";
import faqimg02 from '../../img/faq/faqimg02.png';
import faqimg03 from '../../img/faq/faqimg03.png';
import faqimg04 from '../../img/faq/faqimg04.png';
import faqimg05 from '../../img/faq/faqimg05.png';

const FaqCards = () => {
return (
<div>
  <MDBCard className="card-body faq-card">
    <MDBCardText><img src={faqimg02} alt="" width="10%" height="20%"/> Create Store
    
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={faqimg03} alt="" width="10%" height="20%" /> Offer
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={faqimg04} alt="" width="10%" height="20%" /> Refer &amp; Earn
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body  faq-card">
    <MDBCardText><img src={faqimg05} alt="" width="10%" height="20%" /> Nearby Shop
    </MDBCardText>
    
  </MDBCard>

</div>
);
};

export default FaqCards;