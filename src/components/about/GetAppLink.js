import React from "react";
import { MDBInputGroup } from "mdbreact";
import AppleIcon from "../../img/home/Appleicon.png";
import PlayStore from "../../img/home/Playstore.png";

const GetAppLink = () => {
  return (

    <div className="getapp-link ">
      <div className="row">
        <MDBInputGroup
          style={{ height: '65px',width: '100%', padding: 'none'}}
          container
          ClassName="mb-3 getapp-link-mobile"
          prepend="+91"
          append="GET APP LINK"
          hint="Mobile Number"
          type="number"
          size="lg"
        />
      </div>
      <div className="appIcon-row">
        <img src={AppleIcon} className="img-fluid appIcon" />
        <img src={PlayStore} className="img-fluid appIcon" />
      </div>
    </div>
  );
};

export default GetAppLink;
