import React from "react";
import { MDBInputGroup } from "mdbreact";
import { MDBBtn } from "mdbreact";

const InputPage = () => {
  return (



<div className="text-center input-form">
<MDBInputGroup containerClassName="mb-3" prepend="91+" hint="|Mobile Number" type="number" size="lg" />
      
<MDBBtn color="success" className="my-5 btn-subscribe text-center">SUBSCRIBE NOW</MDBBtn>
</div>);
}

export default InputPage;