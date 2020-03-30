import React, { Component } from "react";
import okjiilogo from "../../img/selfy/okjiilogo.png";
import Doctor from "../../img/selfy/Doctor.png";
import Police from "../../img/selfy/Police.png";
import DeliveryPerson from "../../img/selfy/DeliveryPerson.png";
import FourImage from '../../img/selfy/fourImage.jpg';

import Axios from "axios";
import { message } from "antd";

import mergeImg from 'merge-img';

export default class UplaodSelfyBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      uploadFile: null
    }
    this.selfyRef = React.createRef();
  }
  
  handleImgChange = async (e)=> {
    this.state.uploadFile = e.target.files[0];
    
    let formData = new FormData();
    formData.append('photo', this.state.uploadFile);
    
    Axios.get(process.env.REACT_APP_API_URL + '/upload-selfie', formData)
    .then(({data})=>{
      
    })

    
    // let buffer = await this.state.uploadFile.arrayBuffer()
    // console.log(buffer)
    // const blob = new Blob( [ buffer ] );
    // const url = URL.createObjectURL( blob );
    // mergeImg([url, Doctor]).then((img)=>{
    //   img.write('out.png', ()=>console.log('done'));
    // })
    

  }

  render() {
    return (
      <div className="blog-page">
        <div className="container selfi-blog">
          <div className="row blog">
            <div className="col-md-6">
              <div className="left1">
                <p>We Care 24 Hour for You</p>
                <img src={Doctor} alt="" id='upload1' className="img-fluid selfi-blogicon" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right1">
                <p>We Protect 24 Hour For You</p>
                <img src={Police} alt="" className="img-fluid selfi-blogicon" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left1">
                <p>We Surve 24 Hour For You</p>
                <img
                  src={DeliveryPerson}
                  alt=""
                  className="img-fluid selfi-blogicon"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right1">
                <p>I Stay At Home 24 Hour For all of You</p>
                <p>
                  <button type="file" onClick={()=>this.selfyRef.current.click()}>
                    Click Your Image And
                    Share On Social Media
                  </button>
                  <input type='file' onChange={this.handleImgChange} className='dnone' ref={this.selfyRef}/>
                </p>
              </div>
            </div>
          </div>
          <img src={okjiilogo} alt="" id='selfy-logo' className="img-fluid selfi-icon" />
        </div>
      </div>
    );
  }
}
