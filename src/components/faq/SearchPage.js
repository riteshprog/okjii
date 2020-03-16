import React from "react";
import { MDBCol} from "mdbreact";
import faqimg07 from '../../img/faq/faqimg07.png';
import faqimg05 from '../../img/faq/faqimg05.png';


const SearchPage = () => {
  return (
    <MDBCol md="6">
      <div className="input-group search-form md-form form-sm form-1 pl-0">
        <div className="input-group-prepend ">
          <span className="input-group-text white lighten-3" id="basic-text1">
            <img src={faqimg07} alt="" className="img-fluid faqimg07" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="| Search" aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text white lighten-3"  id="basic-text1">
            
            <img src={faqimg05} alt="" className="img-fluid  float-right faqimg05"  />
            
          </span>
        </div>
      </div>
    </MDBCol>
  );
}

export default SearchPage;