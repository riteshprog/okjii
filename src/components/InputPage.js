import React from "react";
import { MDBContainer, MDBInputGroup } from "mdbreact";
import { MDBBtn } from "mdbreact";

const InputPage = () => {
  return (

<MDBContainer className="text-center">
<MDBInputGroup containerClassName="mb-3" prepend="91+" hint="|Mobile Number" type="number" size="lg" />
      
<MDBBtn color="success" className="my-5 btn-subscribe text-center">SUBSCRIBE NOW</MDBBtn>
</MDBContainer>);
}

export default InputPage;