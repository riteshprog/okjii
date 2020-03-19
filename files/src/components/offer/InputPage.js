import React from "react";
import { MDBInputGroup } from "mdbreact";
import { MDBBtn } from "mdbreact";

const InputPage = () => {
  return (



<div className="input-form">
<MDBInputGroup  prepend="+91" hint="|Mobile Number" type="number" size="lg" />
      
<MDBBtn color="success" className="btn-subscribe btn-offerpage text-center">SUBSCRIBE NOW</MDBBtn>
</div>);
}

export default InputPage;