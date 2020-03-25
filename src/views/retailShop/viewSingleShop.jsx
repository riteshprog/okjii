import React from "react";
import {Steps, Select, Avatar, Switch, message } from 'antd';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button, Form, FormGroup, Input, CardFooter, Alert } from "reactstrap";
import {IdcardFilled, BankOutlined, ShoppingCartOutlined, NotificationOutlined, StarOutlined, UploadOutlined, CheckOutlined } from '@ant-design/icons';
import './retailshop.css';
import Axios from "axios";
import joi from 'joi';

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

class AddNewShop extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      addNewShopModalVisibility: true,
      currentStep: 0,
      isShopSaved: false,
      hasOwnerAvtar: false,
      shopData: {}
    }
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_URL + '/shop/1236547890') //+ this.props.shopMobileNumber)
    .then(({data})=>{
      if(data.status){
        this.setState({shopData: data.shopData})
      }else{
        message.error(data.errorMessage);
      }
    }).catch(err => {

    })
  }
 
    render() {
    return (
      <>
        <div className="content">
          <Row>
            <Steps size="small" current={this.state.currentStep}>
              <Step title={<span className='step' onClick={()=>this.changeStep(0)}>Basic</span>} icon={<IdcardFilled type="idcard" />} />
              <Step title={<span className='step' onClick={()=>this.changeStep(1)}>Bank Details</span>} icon={<BankOutlined />} />
              <Step title={<span className='step' onClick={()=>this.changeStep(2)}>Delivery Setting</span>} icon={<ShoppingCartOutlined />} />
              <Step title={<span className='step' onClick={()=>this.changeStep(3)}>Push Notification</span>} icon={<NotificationOutlined />} />
              <Step title={<span className='step' onClick={()=>this.changeStep(4)}>Store Product/Catelog</span>}  icon={<StarOutlined/>} />
            </Steps>
            <span>{JSON.stringify(this.state.shopData)}</span>

            {this.state.currentStep == 0? (
             <Col md="12 mt-3">
              <Card className="card-user pr-3" style={{height: '80vh'}}>
                <CardHeader>
                <CardTitle tag="h5">Basic</CardTitle>
                </CardHeader>
                <CardBody>
                    {this.state.shopData.basic?(<Row>
                    <Col className="pr-1" md={4}>
                      <div>
                        <span>{this.state.shopData.basic.shopName}</span>
                      </div>
                      <div>
                        <span>{this.state.shopData.basic.ownerName}</span>
                      </div>
                      <div>
                        <span>{this.state.shopData.basic.mobileNumber}</span>
                      </div>
                      <div>
                        {this.state.shopData.basic.shopDocuments && this.state.shopData.basic.shopDocuments.map(doc=>(
                          <img className='icon-sm' src={doc.docUrl} title={doc.docName}/>
                        ))}
                      </div>
                      <div>
                        <span>{this.state.shopData.basic.shopName}</span>
                      </div>
                    </Col>            
                    </Row>):(null)}
                </CardBody>
              </Card>
            </Col>
            ):(null)}

          </Row>
        </div>
      </>
    );
  }
}
export default AddNewShop;