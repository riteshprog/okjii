import React from "react";
import { MDBInputGroup } from "mdbreact";
import { MDBBtn } from "mdbreact";

const InputPage = () => {
  return (



<div className="input-form offer-input">
<MDBInputGroup  prepend="+91" hint="Mobile Number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size="lg" style={{margin: '0px'}} required/>
<MDBBtn color="success" className="btn-subscribe btn-offerpage text-center">SUBSCRIBE NOW</MDBBtn>
</div>);
}

export default InputPage;